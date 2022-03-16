# frozen_string_literal: true

module Mail
  class VerifyUser
    include Interactor

    def call
      UserMailerJob.perform_later(context.user.id)
    end
  end
end
