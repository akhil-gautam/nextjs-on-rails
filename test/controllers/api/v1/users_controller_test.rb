# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class UsersControllerTest < ActionDispatch::IntegrationTest
      def test_create_user_failure
        post api_v1_users_path, params: {
          email: 'akhil@example.com'
        }
        assert_equal 422, status
        assert response.parsed_body.key?('errors')
        assert_enqueued_jobs 0
      end

      def test_create_user_success
        assert_enqueued_jobs 0
        post api_v1_users_path, params: {
          email: 'akhil@example.com',
          password: 'password'
        }
        assert_equal 201, status
        assert_enqueued_jobs 1
        assert_enqueued_with job: UserMailerJob
      end

      def test_update_user_authentication_failure_when_unauthenticated
        user = create(:user)
        patch api_v1_user_path(user), params: {
          email: 'some@example.com'
        }
        assert response.parsed_body.key?('errors')
        assert_equal 'Authentication token not provided', response.parsed_body['errors']
      end

      def test_update_user_success_when_authenticated
        user = create(:user)
        patch api_v1_user_path(user), params: {
          email: 'some@example.com'
        }, headers: get_auth_headers(user)
        assert response.parsed_body.key?('message')
        assert_equal 'some@example.com', user.reload.email
      end

      def test_update_user_failure_when_unauthorized
        user1 = create(:user)
        user2 = create(:user)

        patch api_v1_user_path(user1), params: {
          email: 'some@example.com'
        }, headers: get_auth_headers(user2)

        assert response.parsed_body.key?('errors')
        assert_equal I18n.t('authorization.error'), response.parsed_body['errors']
      end

      def test_update_user_failure_when_email_already_exists
        user1 = create(:user)
        user2 = create(:user)

        patch api_v1_user_path(user1), params: {
          email: user2.email
        }, headers: get_auth_headers(user1)

        assert response.parsed_body.key?('errors')
        assert response.parsed_body['errors'].include? 'Email has already been taken'
      end

      def test_verify_failure_when_token_not_found
        user = create(:user, :unverified)
        get users_verify_path(token: 'some-token')
        assert response.parsed_body.key?('errors')
        assert_equal I18n.t('user.errors.verify'), response.parsed_body['errors']
      end

      def test_verify_success
        user = create(:user, :unverified)
        get users_verify_path(token: user.reset_password_token)
        assert user.reload.reset_password_token.nil?
      end

      def test_login_failure_when_unverified
        user = create(:user, :unverified, password: 'password')

        post login_api_v1_users_path, params: {
          email: user.email,
          password: 'password'
        }
        assert_equal I18n.t('user.errors.login'), response.parsed_body['errors']
      end

      def test_login_failure_when_wrong_credentials
        user = create(:user, password: 'examplepassword')

        post login_api_v1_users_path, params: {
          email: user.email,
          password: 'password'
        }
        assert_equal I18n.t('user.errors.login'), response.parsed_body['errors']
      end

      def test_login_success
        user = create(:user, password: 'password')

        post login_api_v1_users_path, params: {
          email: user.email,
          password: 'password'
        }
        assert response.parsed_body.key?('token')
        assert_equal user.email, response.parsed_body['email']
      end
    end
  end
end
