# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :authenticate_user
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  # rescue_from UnauthorizedError, with: :unauthorized_access

  def authenticate_user
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    if header
      begin
        @decoded = JsonWebToken.decode(header)
        @current_user = User.find(@decoded[:user_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: 'Session expired. Please login again!' }, status: :unauthorized
      end
    else
      render json: { errors: 'Authorization token not provided' }, status: :unauthorized
    end
  end

  private

  def record_not_found
    render json: { errors: 'Record not found' }, status: :not_found
  end

  def unauthorized_access
    render json: { message: 'You are not authorized to access this resource!' }, status: :unprocessable_entity
  end
end
