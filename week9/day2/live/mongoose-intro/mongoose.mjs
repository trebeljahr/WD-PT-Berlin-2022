import mongoose from "mongoose";
// const mongoose = require("mongoose");

await mongoose.connect("mongodb://localhost:27017/pokemons-v3");
await mongoose.connection.db.dropDatabase();
await mongoose.connection.close();

await mongoose.connect("mongodb://localhost:27017/pokemons-v3");
// documents, models, schemas

// name
// type -> grass, fire, water...
// moves -> ["", "", ""]
// hp
// greeting -> should end with !
const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    set: (value) => {
      return value + "!";
    },
  },
  created: {
    type: Date,
    default: Date.now,
    set: () => {
      return Date.now();
    },
  },
  greeting: {
    type: String,
    validate: {
      validator: (greeting) => {
        console.log("Hello there");
        return greeting[greeting.length - 1] === "!";
      },
      message: "Sry, but your greeting has to end with an '!'",
    },
  },
  hp: {
    type: Number,
    required: true,
    default: () => Math.floor(Math.random() * 100) + 10,
  },
  pokeType: {
    type: String,
    required: true,
    enum: ["fire", "electro", "grass"],
  },
});

pokemonSchema.methods.saySomething = function () {
  console.log(`${this.name} says ${this.greeting}`);
};

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

const pikachu = new Pokemon({
  name: "Pikachu",
  greeting: "Pika Pika Pikachu!",
  pokeType: "electro",
  //   created: new Date(),
});

await pikachu.save();

pikachu.saySomething();

const raichu = new Pokemon({
  name: "Raichu",
  pokeType: "electro",
});

await raichu.save();

const charmander = new Pokemon({
  name: "Charmander",
  pokeType: "fire",
});

await charmander.save();

const pokemon = await Pokemon.find(
  {},
  {},
  {
    skip: 1,
    limit: 2,
  }
);
console.log(pokemon);

const firePokemon = await Pokemon.find(
  { pokeType: "fire" },
  { __v: 0, _id: 0 }
);
console.log(firePokemon);

const squirtle = new Pokemon({
  name: "Squirtle",
  pokeType: "grass",
});

await squirtle.save();
console.log(await Pokemon.countDocuments());

// the same as this.
// squirtle.save().then(() => {
// Pokemon.countDocuments.then(console.log)
// })

await Pokemon.updateOne({ name: "Squirtle" }, { pokeType: "water" });

console.log(await Pokemon.findOne({ pokeType: "water" }));

console.log(await Pokemon.countDocuments());

await Pokemon.updateMany(
  { pokeType: "electro" },
  { pokeType: "fire" },
  { runValidators: true }
);

await squirtle.remove();

await Pokemon.findById(pikachu._id);

await Pokemon.findByIdAndRemove(charmander._id);

await Pokemon.deleteOne({ name: "Pikachu" });

console.log(await Pokemon.countDocuments());

await mongoose.connection.close();
