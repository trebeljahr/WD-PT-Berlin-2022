# Plan: 

- clone lab files
- change npm run dev -> to also include .hbs and other files like it :) 

- add some CSS/JS "magic" for a cool navbar :) 

- create register/login (GET/POST) routes
  - add them to app.js

- hashing functions
  - create bcrypt hashing/hash compare functions
  - also create non-bcrypt alternatives

- make register functional 
  - create register view and form partial
  - setup partial
  - import User
  - use it to find out if username exists, send and use error
  - create user if no error, save salt + pwHash
  - redirect to login page

- make login functional
  - query user for username
  - if no user there, send error to login page
  - check PW hashes, send error if not matching
  - hashes match -> send to profile page

- add sessions
  - install express-sessions, create and then use session middleware
  - create and use secret for .env
  - log req.session on requests
  - assign user to session object on successful login

- create logout route on POST
  - destroy session object, next(err) in callback and redirect to login page

- add routeGuard middlewares
  - isLoggedIn
  - isLoggedOut
  - add them to the routes that need protection

- add some simple authorization 
  - adapt user schema to support admin flag
  - user object with "admin" rights that can see all-users
  - add routeGuard - isAdmin
  - add new adminRoutes, protect with isLoggedIn and isAdmin 
  - create links in the navbar
  - create allUsers.hbs and send that in res.render of all-users route
  - query for all users to actually display them
