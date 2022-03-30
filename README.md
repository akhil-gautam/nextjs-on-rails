## Next.js + Ruby on Rails API

![image](https://user-images.githubusercontent.com/28865023/159129958-04d9bf87-5b5c-4ad7-a8e8-628ff418c3e9.png)


Next.js on Rails is an opinionated template for quickly setting up a project with Next.js as the frontend and Ruby on Rails as the backend API.

It follows the best practices of [Next.js](https://nextjs.org/docs/getting-started/introduction) and [Ruby on Rails](https://rubyonrails.org/). It is actively maintained and is a great starting point for new projects.

We have added Docker support to this template. You can find the Dockerfile in the `docker` directory. <br><br>

*For a quick start, you can run the following command:*

```bash
docker-compse up
```

## Features:
#### Backend 🚆 
- [x] User Authentication using JWT
- [x] User Authorization using Pundit
- [ ] Organizations support(Feature in progress)
- [x] Interactor Pattern for API using interactor gem
- [x] premailer-rails for styling emails with stylesheets
- [x] pagy for faster pagination
- [x] jb for a fast JSON API builder
- [x] MiniTest for testing
- [x] SimpleCov for code coverage

### Frontend 🖥
- [x] User Signup and Login
- [x] User Profile
- [x] All basic components under `components/shared`
- [x] DaisyUI for creating additional components
- [x] react-cookie 🍪 for sharing tokens in SSR
- [x] zustand as minimal state management library
- [x] @headlessui/react for accessibile components like `modal/dialog`


## Setup instructions 🔌💡

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

### Docker 🚢
```bash
$ docker-compose up
```


## Contribution
Contribution is welcome! It can be as simple as fixing a typo.
<br><br>
If you're facing any difficulty, create issues in the github repo and I will be happy to help.
