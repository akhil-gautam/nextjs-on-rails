## Next.js + Ruby on Rails API

![image](https://user-images.githubusercontent.com/28865023/159129958-04d9bf87-5b5c-4ad7-a8e8-628ff418c3e9.png)


#### Note: Everything is crafted for my pet projects!

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
- Node >= 16.x.x

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

### Screenshots(desktop 🖥  & mobile 📱)
<p align="center">
<img width="1440" alt="Screenshot 2022-03-30 at 11 52 33 PM" src="https://user-images.githubusercontent.com/28865023/160905078-70e6b19d-9a77-41f9-bca1-6475a72e3988.png">
 
</p>


<p align="center">
<img width="677" alt="Screenshot 2022-03-30 at 11 52 46 PM" src="https://user-images.githubusercontent.com/28865023/160905137-9e7b5b76-b44c-4b8a-9319-8b440c55e37c.png">

  </p>
  
  <p align="center">
<img width="457" alt="Screenshot 2022-03-30 at 11 52 58 PM" src="https://user-images.githubusercontent.com/28865023/160905175-5af61def-45df-4f3f-a699-5ea4da04aa47.png">
  
  </p>

<p align="center">
<img width="336" alt="Screenshot 2022-03-30 at 11 53 46 PM" src="https://user-images.githubusercontent.com/28865023/160905210-872ec609-7bad-41cd-8d85-1d029df3c442.png">
  
  </p>



## Contribution
Contributions are appreciated! It can be as simple as fixing a typo.
<br><br>
If you're facing any difficulty, create issues in the github repo and I will be happy to help.
# next-rails
