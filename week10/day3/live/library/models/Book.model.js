const mongoose = require("mongoose");

// {
//     title: "The Hunger Games",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     author: "Suzanne Collins",
//     rating: 10,
//   },

const harryPotter1 = {
  title: "Harry Potter",
  author: {
    firstName: "J.K",
    lastName: "Rowwling",
  },
};

const harryPotter2 = {
  title: "Harry Potter 2",
  author: {
    firstName: "J.K",
    lastName: "Rowwling",
  },
};

const bookSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    unique: true,
  },
  description: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
  rating: {
    type: Number,
    max: 10,
    min: 0,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = { Book };
