const router = require("express").Router();
const { Author } = require("../models/Author.model");

router.get("/", async (req, res) => {
  const authors = await Author.find();
  res.render("authors", { authors });
});

router.get("/create", (req, res) => {
  res.render("authorCreate");
});

router.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const newAuthor = new Author({ ...req.body });
    await newAuthor.save();
    res.redirect(`/authors/${newAuthor._id}`);
  } catch (err) {
    res.render("error");
  }
});

router.post("/:id/delete", async (req, res) => {
  // req.body
  await Author.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

router.get("/:id", async (req, res) => {
  const foundAuthor = await Author.findById(req.params.id);
  res.render("authorDetails", { author: foundAuthor });
});

module.exports = router;
