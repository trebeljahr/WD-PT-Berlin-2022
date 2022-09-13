const router = require("express").Router();
const { Book } = require("../models/Book.model");

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.render("library", { books });
});

router.post("/", () => {});

router.get("/:bookSlug", async (req, res) => {
  const foundBook = await Book.findOne({ slug: req.params.bookSlug });
  res.render("details", { book: foundBook });
});

module.exports = router;
