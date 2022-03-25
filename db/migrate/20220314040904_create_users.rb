# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |t|
      t.integer :role, null: false, index: true, default: 0
      t.string :email, null: false, index: { unique: true }
      t.string :first_name, default: ''
      t.string :last_name, default: ''
      t.string :password_digest, null: false
      t.string :reset_password_token, index: { unique: true }
      t.datetime :reset_password_sent_at
      t.integer :sign_in_count, default: 0, null: false
      t.string :provider, default: 'email', null: false
      t.timestamps
    end
  end
end
