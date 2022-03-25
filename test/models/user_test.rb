# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :uuid             not null, primary key
#  email                  :string           not null
#  first_name             :string           default("")
#  last_name              :string           default("")
#  password_digest        :string           not null
#  provider               :string           default("email"), not null
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  role                   :integer          default("customer"), not null
#  sign_in_count          :integer          default(0), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_role                  (role)
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = create(:user)
  end

  def test_valid
    assert @user.valid?
  end

  def test_email_is_required
    user = build(:user, email: nil)
    assert_raises ActiveRecord::RecordInvalid do
      user.save!
    end
    assert_includes user.errors[:email], "can't be blank"
  end

  def test_email_is_unique
    user = build(:user, email: @user.email)
    assert_raises ActiveRecord::RecordInvalid do
      user.save!
    end
    assert_includes user.errors[:email], 'has already been taken'
  end

  def test_password_is_required
    user = build(:user, password: nil)
    assert_raises ActiveRecord::RecordInvalid do
      user.save!
    end
    assert_includes user.errors[:password], "can't be blank"

    user.password = '12345678'
    assert user.save!
  end

  def test_authenticate_password
    user = create(:user, password: '12345678')
    assert user.authenticate('12345678')
    refute user.authenticate('123456789')
  end
end
