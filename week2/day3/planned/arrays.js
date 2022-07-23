// Arrays - an !ordered! collection of multiple (different, yes even different types are possible) values
const numbers = [
  1,
  undefined,
  3,
  "hello",
  function () {
    console.log(
      "functions inside of arrays?! Yup, remember, they are first class citizens!"
    );
  },
  5,
  true,
  [
    "element of a nested array",
    "yup",
    "this is an array too",
    ["and yet one level deeper?", "hello, works too"],
  ],
];
console.log(numbers);

const empty = [];
// adding an element
empty[0] = "a";
// accessing an element
console.log("Question: This should be?", empty[0]);
console.log("Question: What would you think this could return?", empty[5]);

const ticTacToeBoard = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "o", "x"],
];
console.table(ticTacToeBoard);

// question -> what would this give back?
console.log(ticTacToeBoard[0]);
// further question -> how could you access an element from the tictactoeboard, say the middle one?
// what about the top right?

empty[3] = "x";

console.log(empty.length);

const chars = [];

// push() -> add elements to the end of the array
chars.push("x");
console.log(chars.push("y"));
// what will this log?
console.log(chars);
// pop() -> remove elements from the end of the array
console.log(chars.pop());
console.log(chars);

// adding and removing elements at the beginning of the array
chars.unshift("a");
console.log(chars);
chars.shift();

// checking if an element is contained in an array
const letters = ["a", "b"];
// indexOf
console.log(letters.indexOf("z"));

// includes
console.log(letters.includes("a"));

// splice()
const countries = ["usa", "france", "uruguay", "england", "poland"];
countries.splice(1, 1, "spain");
console.log(countries);

// write a function that get's the countries array as a parameter
// and (removes) returns an array of countries with countries that
// start with u

function filterCountries(arr) {
  // create a new array
  const filtered = [];
  // iterate over countries
  for (let i = 0; i < arr.length; i++) {
    // check if the country starts with 'u'
    if (arr[i][0] === "u") {
      // if yes then we add it to filtered
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

const filtered = filterCountries(countries);
console.log('Old "filtered"', filtered);
// preview for day 5 - this can be much cleaner with .filter!
const filteredEs6 = countries.filter((countryName) => countryName[0] === "u");
console.log("Modern ES6 filtered:", filteredEs6);
// there are a lot more of these modern ways of doing things - we will learn all about them on Thursday (Day 4)!

// iterating over an array
// for of loop -> for (let <one of the elements> of <name of the array>)
for (let country of countries) {
  console.log(country);
}

// forEach()
countries.forEach((country) => {
  console.log(country);
});
