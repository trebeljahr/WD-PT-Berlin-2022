import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/pokemons");
console.log("collections: ", mongoose.connection.collections);
await mongoose.connection.db.dropDatabase();
await mongoose.connection.close();

await mongoose.connect("mongodb://localhost:27017/pokemons");
console.log("collections: ", mongoose.connection.collections);

// then create a schema
const pokemonSchema = new mongoose.Schema({
  // name: String,
  // add this later after encountering duplicates!
  // delete old db to clear schema properly.
  name: {
    type: String,
    unique: true,
    required: true,
  },
  greeting: {
    type: String,
    validate: {
      validator: (text) => text[text.length - 1] === "!",
      message: "Your greeting has to end with !",
    },
  },
  // we add this later as well... in the beginning not all will have that!
  type: String,
  moves: [String],
});

// adding methods to schemas
pokemonSchema.methods.greet = function () {
  console.log(this.name + ":", this.greeting);
};

// compiling the schema to a model - this is a class constructor
const Pokemon = mongoose.model("Pokemon", pokemonSchema);

// to get a specific instance of that model - we can call it like any other class constructor
const pikachu = new Pokemon({
  name: "Pikachu",
  greeting: "Pika Pika Pikachu!",
});

await pikachu.save();

// another way of doing the same:
const charizard = await Pokemon.create({
  name: "Charizard",
  greeting: "Char Char Charizard!",
});

// note we don't have to use await charizard.save() here

console.log(charizard);

console.log(pikachu.name); // 'Pikachu'
pikachu.greet();

// let's create a second pokemon
const charmander = new Pokemon({
  name: "Charmander",
  greeting: "Char Char Charmander!",
});

const squirtle = new Pokemon({
  name: "Squirtle",
  greeting: "Squir Squir Squirtle!",
});

await charmander.save();
await squirtle.save();

const pokemons = await Pokemon.find();
// let's log all our pokemon names
console.log(pokemons.map((pokemon) => pokemon.name));

// let's make them each greet us
console.log("Pokemons greet!");
pokemons.forEach((pokemon) => pokemon.greet());

// you can query by using regexes! ^ -> matches beginning of line
const pikachus = await Pokemon.find({ name: /^Pikachu/ });
console.log(pikachus.map((pokemon) => pokemon.name));

// if we want to change things - how could we do that?
// let's say we want to add the types to the pokemon for example.
await Pokemon.updateOne(
  { name: "Pikachu" },
  { greeting: "Hello there I am Pikachu", type: "Electro" }
);
// you see - the type update doesn't work here! we have to add it to the schema!
console.log(await Pokemon.findOne({ name: "Pikachu" }));

// let's update it back to what it was before
await Pokemon.updateOne({ name: "Pikachu" }, { greeting: "Pika Pika Pikachu" });

// you can find things by their id's as well - imagine you have many users
// with the same names for example, you could distinguish them by their ids
const realPikachu = await Pokemon.findOne({ name: "Pikachu" });
console.log(realPikachu._id);
console.log(await Pokemon.findById(realPikachu._id));

await Pokemon.updateOne({ name: "Squirtle" }, { type: "Water" });
await Pokemon.updateOne({ name: "Charmander" }, { type: "Fire" });

const raichu = new Pokemon({ name: "Raichu", type: "Electro" });
console.log(await Pokemon.countDocuments({ type: "Electro" }));
// question - why is this 1? shouldn't it be 2?
await raichu.save();

// ok... now it's 2!
console.log(await Pokemon.countDocuments({ type: "Electro" }));

// let's add one more for practice
const pichu = new Pokemon({ name: "Pichu", type: "Electro" });
await pichu.save();

// what should this log?
console.log(await Pokemon.countDocuments({ type: "Electro" }));

// updateMany pokemon at once -> all that have type Electro should get two new moves!
await Pokemon.updateMany(
  { type: "Electro" },
  { moves: ["Thunderbolt", "Paralysis"] }
);

const electroPokemon = await Pokemon.find({ type: "Electro" });
console.log(
  electroPokemon.map(
    (pokemon) => pokemon.name + " knows " + pokemon.moves.join(" and ")
  )
);

const updates = ["Charizard", "Charmander"].map((name) => {
  return Pokemon.updateOne({ name }, { moves: ["Flamethrower"], type: "Fire" });
});
await Promise.all(updates);
console.log(await Pokemon.find({ type: "Fire" }));

// after we are done, let's close the connection so that the node process can exit
mongoose.connection.close();
