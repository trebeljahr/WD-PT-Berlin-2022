// const app = require("express")();
const express = require("express");
const app = express();
const hbs = require("hbs");

const PORT = 3000;

app.set("view engine", "hbs");

hbs.registerHelper("upperCase", (str) => {
  return str.toUpperCase();
});

hbs.registerHelper("plusOne", (num) => {
  // console.log(typeof num);
  return num + 1;
});

hbs.registerHelper("sum", (num1, num2) => {
  // console.log(typeof num);
  return num1 + num2;
});

let pageViews = 0;

app.get("/", (req, res) => {
  const names = ["Hector", "Bernd", "Patrick", "Joao", "Joshua", "Antonio"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  pageViews++;
  res.render("index", {
    firstName: randomName,
    pageViews,
    city: "Berlin",
    movie: {
      director: "James Cameron",
      name: "Avatar",
      mins: "50",
      // hours: "2",
      // duration: "2 hours and 50 mins",
    },
    cities: ["Berlin", "Paris", "Kathmandu", "Stockholm"],
    todos: [
      "Do laundry",
      "Cook dinner",
      "Climb Mt. Everest",
      "Learn programming",
    ],
    htmlString: `<h1>Hello there</h1>
      <script>prompt("Give me your password please")</script>
    `,
  });
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
