# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action :authenticate_user, only: %i[create login verify]
      before_action :set_user, only: [:update]

      # serves as signup
      def create
        result = UserInteractor::AddToSystem.call(params: user_params)
        if result.success?
          render json: result.user, status: :created
        else
          render json: result.error, status: :unprocessable_entity
        end
      end

      def update
        authorize @user
        if @user.update(user_params)
          render json: { message: I18n.t('generic.update.success') }, status: :ok
        else
          render json: { errors: @user.error_string }, status: :unprocessable_entity
        end
      end

      def login
        user = User.verified.where(email: login_params[:email]).first
        if user&.authenticate(login_params[:password])
          token = JsonWebToken.encode(user_id: user.id)
          time = Time.zone.now + 100.hours
          render json: {
            token: token,
            exp: time,
            email: user.email
          }
        else
          render json: { errors: I18n.t('user.errors.login') }, status: :unauthorized
        end
      end

      def verify
        user = User.find_by(reset_password_token: params[:token])
        return render json: { errors: I18n.t('user.errors.verify') }, status: :not_found unless user

        user.update(reset_password_token: nil)
        render json: { success: 'Verified successfully, please login now!' }, status: :ok
      end

      private

      def set_user
        @user = User.find_by(id: params[:id])
        return render json: { error: I18n.t('user.errors.not_found') }, status: :not_found unless @user
      end

      def user_params
        params.permit(:email, :first_name, :last_name, :password)
      end

      def login_params
        params.permit!
      end
    end
  end
end
