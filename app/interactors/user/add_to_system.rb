# frozen_string_literal: true

module User
  class AddToSystem
    include Interactor::Organizer

    organize User::Create, Mail::VerifyUser
  end
end
