// const app = require("express")();
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const axios = require("axios");
const { setUpStarterPokemonRoute } = require("./starterPokemon");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views", "partials"));

setUpStarterPokemonRoute(app);

app.get("/random-pokemon", async (req, res) => {
  const random = Math.floor(Math.random() * 150);
  const url = `https://pokeapi.glitch.me/v1/pokemon/${random}`;

  const {
    data: [{ name, sprite: src, description }],
  } = await axios.get(url);
  // console.log(response);

  res.render("randomPokemon", {
    doctitle: "Random Pokemon",
    pokemon: { src, name, description },
  });
});
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
