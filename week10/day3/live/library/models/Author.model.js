const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  description: String,
  age: Number,
});

const Author = mongoose.model("author", authorSchema);

module.exports = { Author };
