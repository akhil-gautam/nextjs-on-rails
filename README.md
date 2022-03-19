## Next.js + Ruby on Rails API

Next.js on Rails is an optionated template for quickly setting up a project with Next.js as the frontend and Ruby on Rails as the backend API.

It follows the best practices of [Next.js](https://nextjs.org/docs/getting-started/introduction) and [Ruby on Rails](https://rubyonrails.org/). It is actively maintained and is a great starting point for new projects.

We have added Docker support to this template. You can find the Dockerfile in the `docker` directory. <br><br>

*For a quick start, you can run the following command:*

```bash
docker-compse up
```

## Features:
#### Backend
- User Authentication using JWT
- User Authorization using Pundit
- Interactor Pattern for API using interactor gem
- premailer-rails for styling emails with stylesheets
- pagy for faster pagination
- jb for a fast JSON API builder
- MiniTest for testing
- SimpleCov for code coverage

### Frontend
- User Signup and Login
- User Profile
- All basic components under `components/shared`


## Setup instructions

### Manual
- Ruby 3.0.3
- Node >= 14.x.x

```bash
# run in the root directory
$ bundle install

# create database, migrate & seed
$ rails db:prepare

# install packages and come back to root directory
$ cd frontend && npm install && cd ..

# run the application using Foreman
# services are defined in the Procfile
$ foreman start
```

### Docker
```bash
$ docker-compose up
```


## Contribution
Contribution is welcome! It can be as simple as fixing a typo.
<br><br>
If you're facing any difficulty, create issues in the github repo and I will be happy to help.