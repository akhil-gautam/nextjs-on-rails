# frozen_string_literal: true

class UserPolicy < ApplicationPolicy
  def update?
    user.id == record.id
  end
end
