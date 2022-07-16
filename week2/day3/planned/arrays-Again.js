const ourArray = [1, 2, 3, undefined, "str", ["hello"]];
console.log(ourArray);

// general overview over arrays
// inside square brackets we have elements
const numbers = [1, 2, 3];
const names = [
  "Joao",
  "Bernd",
  "Patrick",
  "Antonio",
  "Josh",
  "Mohamed",
  "Hector",
];

// the [ number ] is called an index
console.log(numbers[0]);
console.log(names[1]);
console.log(names[2]);

// if we don't have a value at the index of the array - we get undefined
console.log(names[3]);

// arrays have 0 based indeces
// which means first element is the 0th element
const copy = names;
console.log(copy);
console.log(names);

// changing value
copy[0] = "João";

console.log(names);

// numbers and other atomic data types are passed by value, not by reference
const someNumber = 42;
let copyNumber = someNumber;
console.log(someNumber);
console.log(copyNumber);

copyNumber = 5;
console.log(someNumber);
console.log(copyNumber);

// ... -> spread operator and it will "spread out" the elements of an array
console.log(...names);
const betterCopy = [...names];
betterCopy[0] = "João";
console.log(betterCopy);
console.log(names);

names.length;
betterCopy.length;

// if we want to get the last element we have to subtract one from the length!
names[names.length - 1];
// otherwise "off-by one error" -> one of the most common errors you encounter

/*
for (let i = 0; i<names.length; i++) {
  console.log(names[i]);
}

for (let name of names) {
  console.log(name)
}
*/

// these are going to be covered in a lot more detail on Thursday!
names.forEach((name) => console.log(name));

/*
.filter
.reduce
.map
.sort
.reverse
*/

console.log(names);
// this takes stuff out of the array - removing it from the original
const result = names.splice(0, 1);
console.log(result);
// first argument of splice is index from where to start extracting
// second is number of elements to extract
console.log(names);

// slice on the other hand - leaves the original untouched
const result2 = names.slice(1, 2);
console.log(result2);

// if 2nd parameter is left out - returns everything from index to the end of array
const result3 = names.slice(1);
console.log(result3);

// gets elements from the back if first argument is 0
const fromBack = names.slice(-3);

// .push
// add things to the end of an array
names.push("Rico");
console.log(names);
names.push("Joyce");
console.log(names);

// .pop
// removes things from the end of the array
names.pop();
console.log(names);

// .unshift
// adds things to the beginning
names.unshift("Mariel");
console.log(names);

// .shift
// removes things from the beginning
names.shift();
console.log(names);

// finding the index of an element
names.indexOf("Rico"); // returns -1 if no element like this is found
names.indexOf("Mariel");
names.indexOf("Bernd");

// using it to retrieve the element
names[names.indexOf("Bernd")];

// see if something is in an array -> just want a boolean - yes or no?
names.includes("João");

// also works on strings
"Rico".includes("R");

// multi dimensional arrays - i.e. nested arrays
const multiDimArray = [
  [
    ["a", "b"],
    ["c", "d"],
  ],
  [
    ["e", "f"],
    ["g", 3],
  ],
];

// to access -> bracket notation! nested bracket notation. Each step returns an array as well.
multiDimArray[1][0][0];

// where might this be useful?!
const ticTacToeBoard = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["x", "o", "o"],
];

// exercise - accessing the corners of this board!
// what about the middle?
const topLeftCorner = ticToeBoard[0][0];
const middle = ticTacToeBoard[1][1];
const topRightCorner = ticTacToeBoard[0][2];
