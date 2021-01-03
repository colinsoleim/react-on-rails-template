source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.2"
gem "rails", "~> 6.1.0"
gem "pg", "~> 1.1"                            # Default gem installation for Rails 6.1
gem "puma", "~> 5.0"                          # Default gem installation for Rails 6.1
gem "sass-rails", ">= 6"                      # Default gem installation for Rails 6.1
gem "webpacker", "~> 5.0"                     # Default gem installation for Rails 6.1
gem "turbolinks", "~> 5"                      # Default gem installation for Rails 6.1
gem "jbuilder", "~> 2.7"                      # Default gem installation for Rails 6.1
gem "bootsnap", ">= 1.4.4", require: false    # Default gem installation for Rails 6.1
gem "newrelic_rpm"                            # Performance Monitoring
gem "draper"                                  # Easy decorator setup

group :development, :test do
  gem "bullet"                                # N+1 query detection
  gem "dotenv-rails"                          # Load environment variables from .env into ENV in development.
  gem "pry"                                   # Console Improvements
  gem "rb-readline"                           # Error Logging
  gem "rspec-rails", "~> 3.6"                 # Testing Library
end

group :development do
  gem "web-console", ">= 4.1.0"               # Interactive console on exception pages or by calling 'console'
  gem "rack-mini-profiler", "~> 2.0"          # Default gem installation for Rails 6.1
  gem "listen", "~> 3.3"                      # Default gem installation for Rails 6.1
  gem "awesome_print"                         # Pretty print your Ruby objects with indentation
  gem "better_errors"                         # Interactive console on exception pages
  gem "binding_of_caller"                     # Interactive console on exception pages
  gem "prettier"                              # Linting tool specifically for line length warnings
  gem "rubocop"                               # Style Monitoring
  gem "rubocop-performance"                   # Performance Monitoring
  gem "rubocop-rails"                         # Rails Style Monitoring
  gem "rubocop-rspec"                         # Rspec Style Monitoring
end

group :test do
  gem "capybara", ">= 2.15", "< 4.0", require: false
  gem "database_cleaner"                                  # DB resets between tests
  gem "email_spec"                                        # Adds email helper methods to RSpec
  gem "factory_bot_rails"
  gem "launchy"                                           # Easier launch commands
  gem "rails-controller-testing"                          # Rails controller testing
  gem "rspec-sidekiq"
  gem "selenium-webdriver", require: false
  gem "shoulda-matchers"
  gem "simplecov", require: false                         # Test coverage
  gem "timecop"                                           # Improve control of time in tests
  gem "vcr"                                               # Record http requests for more reliable testing
  gem "webdrivers", require: false
  gem "webmock"                                           # Test HTTP requests
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
