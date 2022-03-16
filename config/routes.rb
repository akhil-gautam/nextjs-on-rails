# frozen_string_literal: true

# == Route Map
#

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[create show update] do
        post :login, on: :collection
      end
    end
  end
  get 'users/verify', to: 'api/v1/users#verify'
end
