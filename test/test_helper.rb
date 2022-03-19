# frozen_string_literal: true

require 'simplecov'
SimpleCov.start

ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require 'mocha/minitest'
require 'webmock/minitest'

module ActiveSupport
  class TestCase
    parallelize(workers: :number_of_processors)
    include FactoryBot::Syntax::Methods

    def get_auth_headers(user)
      token = JsonWebToken.encode(user_id: user.id)
      { 'Authorization' => "Token #{token}" }
    end
  end
end
