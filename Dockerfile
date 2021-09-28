FROM ruby:3.0.2

RUN apt-get update -qq && apt-get install -y \
  nodejs \
  postgresql-client

WORKDIR /app

COPY Gemfile Gemfile.lock /app/

RUN bundle install
