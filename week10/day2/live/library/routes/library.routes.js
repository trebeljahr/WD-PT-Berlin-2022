const router = require("express").Router();
const { Book } = require("../models/Book.model");
const { toSlug } = require("../utils/toSlug");

console.log("What is Book here?", Book);

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.render("library", { books });
});

router.get("/create", (req, res) => {
  res.render("create");
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
  await Book.findOneAndDelete({ slug: req.params.bookSlug });
  console.log("After", await Book.countDocuments());
  res.redirect("/");
});

router.get("/:bookSlug", async (req, res) => {
  const foundBook = await Book.findOne({ slug: req.params.bookSlug });
  res.render("details", { book: foundBook });
});

module.exports = router;
