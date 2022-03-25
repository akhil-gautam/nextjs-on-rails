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
FactoryBot.define do
  factory :user do
    role { 'customer' }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    reset_password_token { nil }
    reset_password_sent_at { DateTime.now }
    password { Faker::Internet.password }

    trait :unverified do
      reset_password_token { SecureRandom.uuid }
    end
  end
end
