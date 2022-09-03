# Handlebars Layout and Partials

## Start
- build scaffold for hbs - setup npm project, install dependencies - express, hbs
- add public to route for referencing css file
- create views folder and index.js
- setup view engine so that res.render() works

## Intro Concept of Layout
- we want to have same footer/header everywhere
- views folder -> file named layout.hbs -> html around for layout -> {{{body}}}

## Intro Concept of Partials
- re-use of single "components"
- show how syntax works, how to pass context to it, how to pass extra params to it
- register new routes dynamically based on movies array
