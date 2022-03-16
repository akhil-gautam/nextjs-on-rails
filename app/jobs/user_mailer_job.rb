# frozen_string_literal: true

class UserMailerJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    UserVerificationMailer.verify(User.find(user_id)).deliver_now
  end
end
