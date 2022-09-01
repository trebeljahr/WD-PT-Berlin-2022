// const express = require("express");
import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// in .mjs module files you can use top-level await
// await something();

const app = express();

app.use("/images", express.static(__dirname + "/public/images"));
app.use("/js", express.static(__dirname + "/public/js"));
// app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("We've got a connection!!!!");
  console.log("Hooray");
  res.send("Hello there, we hear you!");
});

console.log(__dirname);

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/unicorn", (_, res) => {
  res.send(`
  <h1> 🦄 🌈 This is the About Page 🌈 🦄 </h1>
  `);
});

app.listen(3000, () => {
  console.log("Hello there, we're listening...");
});
