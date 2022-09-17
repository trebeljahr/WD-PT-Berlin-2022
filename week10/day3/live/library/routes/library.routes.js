const router = require("express").Router();
const { Author } = require("../models/Author.model");
const { Book } = require("../models/Book.model");
const { Comment } = require("../models/Comment.model");
const { toSlug } = require("../utils/toSlug");

console.log("What is Book here?", Book);

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.render("library", { books });
});

router.get("/create", async (req, res) => {
  const authors = await Author.find();
  res.render("create", { authors });
});

router.get("/:bookSlug/edit", (req, res) => {
  res.render("edit");
});

router.post("/:bookSlug/edit", async (req, res) => {
  const sanitizedBody = Object.fromEntries(
    Object.entries(req.body).map(([key, value]) => {
      return [key, req.sanitize(value)];
    })
  );

  console.log(sanitizedBody);

  const newSlug = toSlug(sanitizedBody.title);
  const sanitizedSlug = req.sanitize(req.params.bookSlug);

  await Book.findOneAndUpdate(
    { slug: sanitizedSlug },
    { ...sanitizedBody, slug: newSlug }
  );
  res.redirect(`/library/${newSlug}`);
});

router.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const slug = toSlug(req.body.title);
    const newBook = new Book({ ...req.body, slug });
    await newBook.save();
    res.redirect(`/library/${slug}`);
  } catch (err) {
    res.render("error");
  }
});

router.post("/:bookSlug/delete", async (req, res) => {
  // req.body
  console.log("Before", await Book.countDocuments());
  const book = await Book.findOneAndDelete({ slug: req.params.bookSlug });

  await Comment.deleteMany({ bookId: book._id });
  console.log("After", await Book.countDocuments());
  res.redirect("/");
});

router.get("/:bookSlug", async (req, res) => {
  const foundBook = await Book.findOne({ slug: req.params.bookSlug });
  console.log(foundBook);
  // const author = await Author.findById(foundBook.author);
  await foundBook.populate("author");
  console.log(foundBook);

  const comments = await Comment.find({ bookId: foundBook._id });
  console.log(comments);

  res.render("details", { book: foundBook, comments });
});

router.post("/:bookId/comment/create", async (req, res) => {
  console.log(req.params.bookId);

  const newComment = new Comment({
    bookId: req.params.bookId,
    message: req.body.message,
  });
  await newComment.save();

  const foundBook = await Book.findById(req.params.bookId);
  res.redirect(`/library/${foundBook.slug}`);
});

module.exports = router;
