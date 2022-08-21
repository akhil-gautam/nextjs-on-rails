# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'
gem 'bcrypt', '~> 3.1.7'
gem 'good_job'
gem 'interactor', '~> 3.0'
gem 'interactor-rails', '~> 2.0'
gem 'jb'
gem 'jwt'
gem 'pagy', '~> 5.10'
gem 'pg', '1.4.3'
gem 'premailer-rails'
gem 'puma'
gem 'pundit'
gem 'rack-cors'
gem 'rails', '7.0.3.1'
gem 'strong_migrations'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  gem 'bullet', '~> 7.0.1'
  gem 'dotenv-rails'
  gem 'factory_bot_rails', '~> 6.2.0'
  gem 'faker', '~> 2.20.0'
  gem 'pry-rails'
end

group :development do
  gem 'annotate', '~> 3.2'
  gem 'letter_opener', '~> 1.8'
  gem 'rubocop-github'
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
end

group :test do
  gem 'mocha'
  gem 'simplecov', '~> 0.21.2'
  gem 'webmock'
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end
