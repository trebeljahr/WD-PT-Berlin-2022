function setUpStarterPokemonRoute(app) {
  app.get("/", (req, res) => {
    res.render("starterPokemon", {
      doctitle: "Starter Pokemon",
      starters: [
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
      ],
    });
  });
}

module.exports = { setUpStarterPokemonRoute };
