const someNumbers = [1, 2, 3, -5, -10];
const someNumbersSquared = someNumbers.map((a) => a * a);
console.log({ someNumbersSquared });
// test of previous learning:
// how many function invocations?
// how many function declarations?

// let's do a cube function
const someNumbersCubed = someNumbers.map((num) => num * num * num);
console.log({ someNumbersCubed });

// we want to re-use this cube function...
// how could we do it?

const someOtherNumbers = [1, 2, 3];

const cube = (num) => num * num * num;
const someOtherNumbersCubed = someOtherNumbers.map(cube);
console.log({ someOtherNumbersCubed });
// advantage of splitting out function and giving it a name: re-usability!
// if we want cubedNumbers again, we would have to write the function again.
// also makes intent clearer if function is more complex

// to see what's happening inside map let's write our own map function
function myMap(arr, callback) {
  let newArr = [];
  for (let element of arr) {
    // console.log(element);
    const changedEl = callback(element);
    newArr.push(changedEl);
  }
  return newArr;
}

const resultMyMap = myMap(someNumbers, (num) => {
  return num + 10;
});
console.log({ resultMyMap });

const motivationalTexts = ["Do it!", "Just do It!", "!!!! DOOO IT !!!!"];
// these need some EMPHASIS!
const toUpperCase = (str) => str.toUpperCase();
const MOTIVATIONALTEXTS = motivationalTexts.map(toUpperCase);
console.log(MOTIVATIONALTEXTS);

const wizards = [
  ["harry", "potter"],
  ["albus", "dumbledore"],
  ["hermione", "granger"],
  ["draco", "lucius", "malfoy"],
];

// we need a function that can join names together
function addNames(names) {
  return names.join(" ");
}

// we need a function to capitalize the first letter of a name
function toCapitalized(name) {
  return name[0].toUpperCase() + name.slice(1);
}

// map can be joined together
const niceNames = wizards
  .map((fullNames) => fullNames.map(toCapitalized))
  .map(addNames);

console.log("Nice Names: ", niceNames);

// we can access additional parameters
const moreNumbers = [1, 2, 3, 4, 5];
const result2 = moreNumbers.map((num, index) => {
  console.log(index);
  return num * 2;
});
console.log(result2);
