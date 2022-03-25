# frozen_string_literal: true

module UserInteractor
  class AddToSystem
    include Interactor::Organizer

    organize UserInteractor::Create, Mail::VerifyUser
  end
end
