// require("../db");

// const { Book } = require("../models/Book.model");
// const { Author } = require("../models/Author.model");

// async function main() {
//   const allBooks = await Book.find();
//   for (let book of allBooks) {
//     console.log(book);
//     // console.log(book.author);

//     if (book.author) {
//       const [firstName, lastName] = book.author.split(" ");

//       const newAuthor = new Author({ description: "", firstName, lastName });
//       //   console.log(newAuthor);
//     }
//   }
// }

// main();
