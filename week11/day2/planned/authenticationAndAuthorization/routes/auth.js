const router = require("express").Router();
const User = require("../models/User.model");
const { promisify } = require("util");
const crypto = require("crypto");
const { isLoggedOut, isLoggedIn } = require("../middlewares/routeGuards");
const scrypt = promisify(crypto.scrypt);

router.get("/register", isLoggedOut, (req, res, next) => {
  console.log(req.params);
  console.log(req.query);
  res.render("register");
});
// const bcryptjs = require("bcryptjs");
// const saltRounds = 10;

router.post("/register", async (req, res, next) => {
  // const salt = await bcryptjs.genSalt(saltRounds);
  // const hashedPassword = await bcryptjs.hash(password, salt);
  // console.log(`Password hash: ${hashedPassword}`);

  console.log(req.body);
  const normalizedUsername = req.body.username.toLowerCase();
  const { hash, salt } = await generateHash(req.body.password);
  const userExists = await User.findOne({ username: normalizedUsername });
  if (userExists) {
    return res.render("register", { error: "This username is already taken!" });
  }

  const newUser = new User({
    username: req.body.username,
    password: hash,
    salt,
  });
  await newUser.save();
  res.redirect("profile");
});

async function generateHash(plainText) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = await scrypt(plainText, salt, 64);
  return { hash: hash.toString("hex"), salt };
}

module.exports = router;
