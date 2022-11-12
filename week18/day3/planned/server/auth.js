import { Router } from "express";
import { promisify } from "util";
import { isLoggedIn } from "./routeGuards.js";
import User from "./User.js";
import crypto from "crypto";

const scrypt = promisify(crypto.scrypt);
const router = Router();

router.post("/register", async (req, res, next) => {
  console.log(req.body);
  const normalizedUsername = req.body.username.toLowerCase();
  const { hash, salt } = await generateHash(req.body.password);
  const userExists = await User.findOne({ username: normalizedUsername });
  if (userExists) {
    return res
      .status(400)
      .json({ errorMessage: "This username is already taken!" });
  }

  const newUser = new User({
    username: req.body.username,
    password: hash,
    salt,
  });
  await newUser.save();
  res.json({ message: "Successfully registered" });
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).json({
      errorMessage: "Wrong password or username",
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
    console.log(req.session.currentUser);
    res.json({ message: "Success!" });
  } else {
    res.status(400).json({
      errorMessage: "Wrong password or username",
    });
  }
});

router.post("/logout", isLoggedIn, async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.json({ message: "successfully logged out" });
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

export default router;
