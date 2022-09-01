const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("We've got a connection!!!!");
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
