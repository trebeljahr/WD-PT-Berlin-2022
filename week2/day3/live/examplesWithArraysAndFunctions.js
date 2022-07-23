const names = ["Bernd", "Patrick", "Antonio"];
function pickRandomFromArray(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  console.log(randomNumber);
  console.log(arr[randomNumber]);
  return arr[randomNumber];
}

const result = pickRandomFromArray(names);
console.log(result);

const wizards = ["Harry Potter", "Albus Dumbledore", "Hermione Granger"];
pickRandomFromArray(wizards);

const cards = ["7", "K", "A", "Q"];
pickRandomFromArray(cards);

// filter out only numbers bigger than 10;
const numbers = [12, 5, 3, 1, -5, -10, 20, 15];
const numbers2 = [100, 55, -1, -2, 0, 10];
// const outPut = [];

const result1 = filterByBiggerThan10(numbers);
const result2 = filterByBiggerThan10(numbers2);

// const outPut = [];
// numbers.forEach((value) => {
//   if (value > 10) {
//     outPut.push(value);
//   }
// });

// console.log(outPut);
// return outPut

// const outPut2 = [];
// numbers2.forEach((value) => {
//   if (value > 10) {
//     outPut2.push(value);
//   }
// });
// console.log(outPut2);

function filterByBiggerThan10(arr) {
  const outPut = [];
  arr.forEach((value) => {
    if (value > 10) {
      outPut.push(value);
    }
  });
  console.log(outPut);
  return outPut;
}

function filter(arr, functionToFilterBy) {
  const outPut = [];
  arr.forEach((value) => {
    if (functionToFilterBy(value)) {
      outPut.push(value);
    }
  });
  console.log(outPut);
  return outPut;
}

filter(numbers, (value) => value > 10);
console.log(
  "Filtered by < 0",
  numbers,
  filter(numbers, (value) => value < 0)
);

filter(wizards, (name) => name === "Harry Potter");
filter(wizards, (name) => name.length > 15);
// filter(wizards, (name) => name.length > 15);
