# frozen_string_literal: true

class User::AddToSystem
  include Interactor::Organizer

  organize User::Create, Mail::VerifyUser
end
