const express = require("express");
const path = require("path");
const hbs = require("hbs");
const fileUpload = require("express-fileupload");
// const nanoid = require("nanoid");
// const { v4: uuidv4 } = require("uuid");
const { default: axios } = require("axios");
const sharp = require("sharp");
const PORT = 3000;
const baseUrl = "https://rickandmortyapi.com/api/character/";

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");

// app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ createParentPath: true }));
// hbs.registerPartial("")...

app.get("/", (req, res) => {
  res.render("index", { name: "World!" });
});

app.get("/find-by-name", async (req, res) => {
  console.log(req.query);
  console.log(req.url);

  let response;
  try {
    response = await axios.get(baseUrl + `?name=${req.query.name}`);
    console.log(response.data);
  } catch (err) {
    return res.send("wrong character name!").status(404);
  }
  res.render("multiple", {
    characters: response.data.results,
    query: req.query.name,
  });
});

app.get("/imageUpload", (req, res) => {
  res.render("imageUpload", { uploadPath: "/imageUpload" });
});

app.post("/imageUpload", async (req, res) => {
  console.log(req.files);

  await req.files.image.mv(
    path.join(__dirname, "public", "uploads", req.files.image.name)
  );
  res.render("imageUpload");
});

app.get("/grayscale", (_, res) => {
  res.render("imageUpload", { uploadPath: "/grayscale" });
});

app.post("/grayscale", async (req, res) => {
  const rawLocation = path.join(
    __dirname,
    "public",
    "uploads",
    req.files.image.name
  );
  await req.files.image.mv(rawLocation);

  const grayscaleFileSrc = path.join("grayscale", req.files.image.name);

  await sharp(rawLocation)
    .grayscale()
    .toFile(path.join(__dirname, "public", grayscaleFileSrc));
  res.render("downloadGrayScale", { src: grayscaleFileSrc });
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", async (req, res) => {
  console.log("body:", req.body);

  let response;
  try {
    response = await axios.get(baseUrl + `?name=${req.body.name}`);
    console.log(response.data);
  } catch (err) {
    return res.send("not a valid character name!").status(404);
  }
  res.render("search", { results: response.data.results });
});

app.get("/character/:id", async (req, res) => {
  console.log(req.url);

  //   const {
  //     params: { id },
  //   } = req;

  const id = req.params.id;
  let response;
  try {
    response = await axios.get(baseUrl + id);
  } catch (err) {
    return res.send("wrong character id!").status(404);
  }
  //   const characterName = response.data.name;
  //   const imageSrc = response.data.image;

  // characterName, imageSrc
  const { name: characterName, image: imageSrc } = response.data;
  //   const {
  //     data: { name: characterName, image: imageSrc },
  //   } = response;

  console.log(characterName, imageSrc);

  console.log(req.params); // { id: value}
  res.render("character", { characterName, imageSrc });
});

app.listen(PORT, () => {
  console.log("Listening on ", PORT);
});
