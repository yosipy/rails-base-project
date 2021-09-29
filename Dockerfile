FROM ruby:3.0.2

ENV NODE_VERSION=16.x

RUN curl -SL https://deb.nodesource.com/setup_${NODE_VERSION} | bash -
RUN apt-get update -qq && apt-get install -y \
  nodejs \
  postgresql-client

WORKDIR /app

COPY Gemfile Gemfile.lock /app/

RUN bundle install
