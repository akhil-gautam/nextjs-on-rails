# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def error_string
    errors.full_messages.join(' and ')
  end
end
