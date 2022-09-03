const express = require("express");
const app = express();
const hbs = require("hbs");
const { addSlug } = require("./helpers");
const port = 3000;

const moviesWithoutSlugs = require("./movies.json");
const movies = moviesWithoutSlugs.map(addSlug);

const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

// setup view engine
app.set("view engine", "hbs");

// we have to register partials to be able to use them in res.render
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  // res.render takes in partial name + data to fill out in the partial
  res.render("movies", {
    movieList: movies,
    isMainPage: "true",
    doctitle: "Home Page",
  });
});

movies.forEach((movie) => {
  app.get(`/${movie.slug}`, (req, res) => {
    res.render("movieDetails", {
      movie,
      doctitle: `Detail Page for ${movie.title}`,
    });
  });
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
