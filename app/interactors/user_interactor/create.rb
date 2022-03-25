# frozen_string_literal: true

module UserInteractor
  class Create
    include Interactor

    def call
      params = context.params.merge(
        reset_password_token: SecureRandom.urlsafe_base64,
        reset_password_sent_at: Time.now
      )
      user = User.new(params)
      if user.save
        context.user = user
      else
        context.fail!(error: { errors: user.error_string })
      end
    end
  end
end
