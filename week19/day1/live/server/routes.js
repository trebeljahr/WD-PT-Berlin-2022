import bcrypt from "bcryptjs";
import { Router } from "express";
import { User } from "./User.model.js";
import axios from "axios";

async function generateHash(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const userFromDb = await User.findOne({
      username: req.body.username,
    });
    const passwordsMatch = await bcrypt.compare(
      req.body.password,
      userFromDb.password
    );

    if (!passwordsMatch) {
      console.log("Passwords didn't match");
      throw new Error("Login failed");
    }

    console.log("Everything fine...");

    const user = { username: userFromDb.username };
    req.session.currentUser = user;

    // serialization => putting something like an object => into a value we can send. utf8 string.
    return res.json({
      message: "Successfully logged in!",
      user,
    });
  } catch (error) {
    console.log("There was an error", error);
    return res
      .status(500)
      .json({ error: "There was an error in the signup: " + error.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      password: await generateHash(req.body.password),
    });
    await newUser.save();
    req.session.currentUser = user;

    return res.json({ message: "Successfully signed up" });
  } catch (error) {
    console.log("There was an error", error);
    return res
      .status(500)
      .json({ error: "There was an error in the signup: " + error.message });
  }
});

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.json({ message: "Successfully logged out!" });
  });
});

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

router.post("/form-handler", (req, res) => {
  console.log(req.body);

  res.json({ message: "Success!" });
});

router.put("/file-upload", async (req, res) => {
  console.log(req.files);
  await req.files.image.mv(
    path.join(publicFolderLocation, req.files.image.name)
  );
  // BASE_URL + "/" + req.files.image.name
  res.json({ url: req.files.image.name });
});

router.get("/pokemon/:slug", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.glitch.me/v1/pokemon/${req.params.slug}`
    );
    console.log(data);
    res.json({ data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
