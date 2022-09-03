const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "hbs");

const Handlebars = require("hbs");

Handlebars.registerHelper("upper", function (string) {
  return string.toUpperCase() + "?????";
});

Handlebars.registerHelper("lower", (str) => str.toLowerCase());

app.get("/", (_, res) => {
  const todos = ["learn node", "learn react", "walk the dog"];
  // before : res.sendFile()
  // if we use hbs: res.render(<name of the hbs file>, <object holding the data>)
  res.render("index", {
    name: "Handlebars",
    city: "Berlin",
    movie: {
      name: "Star Wars",
      genre: "SciFi",
    },
    todos,
    heading: "<h1>This is html coming from the server</h1>",
    people: ["Marc", "Julie", "Amit", "Andre"],
    cities: ["Berlin", "Paris", "Delhi", "Madrid"],
    // xss: "<script>alert(1)</script>",
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
