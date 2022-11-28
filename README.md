# React on Rails Template

## Prerequisites
- Postgres
- Ruby 2.7.2
- Rails 6.1

## Installation (Local)
- `bundle install`
- `rake db:{create,migrate,seed}`
- `bundle exec rails webpacker:install`
- `yarn install`
- `rails s`

## Heroku Deployment
Application is hosted on Heroku.

## Notes
- Deployments that require database migrations must run `heroku run rake db:migrate -a app-name` where app-name is the name of the application on Heroku.
