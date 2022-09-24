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

router.post("/register", async (req, res, next) => {
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
  res.render("login");
});

router.get("/login", isLoggedOut, (req, res) => {
  console.log("SESSION =====> ", req.session);
  res.render("login");
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.render("login", {
      error: "Wrong password or username",
    });
  }
  const correctPassword = await checkPasswordInput(
    req.body.password,
    user.password,
    user.salt
  );
  console.log("Correct password?", correctPassword === true ? "yes" : "no");
  if (correctPassword) {
    req.session.currentUser = user;
    res.redirect("/profile");
  } else {
    res.render("login", {
      error: "Wrong password or username",
    });
  }
});

router.post("/logout", isLoggedIn, async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.redirect("/login");
  });
});

async function checkPasswordInput(input, pwHashFromDB, saltFromDB) {
  const inputHash = await scrypt(input, saltFromDB, 64);
  const hexInputHash = inputHash.toString("hex");
  console.log(inputHash);
  console.log(pwHashFromDB);
  return hexInputHash === pwHashFromDB;
}

async function generateHash(plainText) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = await scrypt(plainText, salt, 64);
  return { hash: hash.toString("hex"), salt };
}

module.exports = router;
