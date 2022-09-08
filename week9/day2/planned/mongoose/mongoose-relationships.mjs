import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/pokemons-v2");
await mongoose.connection.db.dropDatabase();

await mongoose.connection.close();

await mongoose.connect("mongodb://localhost:27017/pokemons-v2");

// use setters
function capitalize(val) {
  if (typeof val !== "string") val = "";
  return val.charAt(0).toUpperCase() + val.substring(1);
}

// then create a schema
const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    set: capitalize,
  },
  hitpoints: Number,
  // for now have something more simple without the moves
  created: {
    type: Date,
    default: Date.now,
  },
  pokeType: { type: mongoose.Schema.Types.ObjectId, ref: "PokeType" },
  moves: [{ type: mongoose.Schema.Types.ObjectId, ref: "PokeMove" }],
});

pokemonSchema.methods.attack = async function (attackIndex, _id) {
  const otherPokemon = await Pokemon.findById(_id);
  await otherPokemon.populate("pokeType");
  console.log(
    this.name +
      " uses " +
      this.moves[attackIndex].name +
      " on " +
      otherPokemon.name
  );

  const isEffective =
    otherPokemon.pokeType.weakAgainst === this.moves[attackIndex].pokeType;

  // console.log(otherPokemon);
  // console.log(otherPokemon.pokeType);
  // console.log(this.moves[attackIndex]);

  if (isEffective) {
    console.log("This is very effective!");
  }

  const multiplier = isEffective ? 2 : 1;
  const remaining =
    otherPokemon.hitpoints - multiplier * this.moves[attackIndex].damage;
  // console.log(otherPokemon._id);
  const otherPokemonAfterUpdate = await Pokemon.findByIdAndUpdate(
    otherPokemon._id,
    {
      hitpoints: remaining,
    }
  );
  console.log(otherPokemonAfterUpdate.name + " has " + remaining + " hp left");
};

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

const possibleTypes = ["fire", "grass", "water", "electro", "dirt"];

const pokeTypeSchema = mongoose.Schema({
  name: {
    type: String,
    enum: possibleTypes,
    unique: true,
    required: true,
  },
  weakAgainst: {
    type: String,
    enum: possibleTypes,
    required: true,
  },
  strongAgainst: {
    type: String,
    enum: possibleTypes,
    required: true,
  },
});

const PokeType = mongoose.model("PokeType", pokeTypeSchema);
const grassType = new PokeType({
  name: "grass",
  weakAgainst: "fire",
  strongAgainst: "water",
});

const fireType = new PokeType({
  name: "fire",
  weakAgainst: "water",
  strongAgainst: "grass",
});

const electroType = new PokeType({
  name: "electro",
  weakAgainst: "dirt",
  strongAgainst: "water",
});

const waterType = new PokeType({
  name: "water",
  weakAgainst: "grass",
  strongAgainst: "fire",
});

await grassType.save();
await fireType.save();
await electroType.save();
await waterType.save();

const moveSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pokeType: { type: mongoose.Schema.Types.ObjectId, ref: "PokeType" },
  damage: Number,
});

const Move = mongoose.model("PokeMove", moveSchema);

const thunderbolt = new Move({
  name: "Thunderbolt",
  pokeType: electroType,
  damage: 70,
});

const flamethrower = new Move({
  name: "Flamethrower",
  pokeType: fireType,
  damage: 120,
});

await thunderbolt.save();
await flamethrower.save();

const pikachu = new Pokemon({
  name: "Pikachu",
  pokeType: electroType,
  moves: [thunderbolt],
  hitpoints: 200,
});

const charizard = new Pokemon({
  name: "Charizard",
  pokeType: fireType,
  moves: [flamethrower],
  hitpoints: 400,
});

await pikachu.save();
await charizard.save();

console.log(pikachu);
console.log(pikachu.pokeType);

await pikachu.attack(0, charizard._id);
await pikachu.attack(0, charizard._id);

mongoose.connection.close();
