# frozen_string_literal: true

class UserVerificationMailer < ApplicationMailer
  default from: 'akhilgautam123@gmail.com'

  def verify(user)
    @user = user
    mail(to: @user.email,
         subject: 'Please verify your email!')
  end
end
