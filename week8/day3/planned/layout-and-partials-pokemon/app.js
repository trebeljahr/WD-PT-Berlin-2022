const express = require("express");
const app = express();
const hbs = require("hbs");
const axios = require("axios");

const port = 3000;

const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

// setup view engine
app.set("view engine", "hbs");

// we have to register partials to be able to use them in res.render
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  const starters = [
    {
      src: "https://cdn.traction.one/pokedex/pokemon/1.png",
      name: "Bulbasaur",
    },
    {
      src: "https://cdn.traction.one/pokedex/pokemon/4.png",
      name: "Charmander",
    },
    {
      src: "https://cdn.traction.one/pokedex/pokemon/7.png",
      name: "Squirtle",
    },
  ];
  res.render("all-pokemon", { starters, doctitle: "The 3 Starter Pokemon" });
});

app.get("/random-pokemon", async (req, res) => {
  const random = Math.floor(Math.random() * 150) + 1;
  const url = `https://pokeapi.glitch.me/v1/pokemon/${random}`;
  const {
    data: [{ name, sprite: src }],
  } = await axios.get(url);

  console.log(name, src);
  res.render("random-pokemon", { name, src, doctitle: "Random Pokemon" });
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
