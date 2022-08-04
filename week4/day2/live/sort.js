const unorderedNums = [1, 10, -10, 500, 100000, 25, 4];

const sortedNums = unorderedNums.sort((a, b) => b - a);
const ascendingOrder = unorderedNums.sort((a, b) => a - b);

console.log(sortedNums);
console.log(ascendingOrder);

const products = [
  { score: 5, name: "Washing Machine" },
  { score: 10, name: "Stove" },
  { score: 1, name: "Sink" },
];

const ascendingProducts = [...products].sort((a, b) => a.score - b.score);
console.log(ascendingProducts);

const descendingProducts = [...products].sort((a, b) => b.score - a.score);
console.log(descendingProducts);

// what is this after we have sorted a couple of times
console.log(products);

// copies of arrays and objects -> they are kind of hard -> because of the way arrays and objects are passed around
// shallow copy
const copy = [...products]; // -> spread operator

// hacked together way of a deep copy
const deepCopy = JSON.parse(JSON.stringify(products));

const names = [
  "Antonio",
  "Joshua",
  "Rico",
  "bernd",
  "Patrick",
  "Hector",
  "Joao",
];

console.log(
  names.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  })
);
