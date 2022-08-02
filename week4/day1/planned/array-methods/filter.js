// filter - iterates over an array and returns a new array
// containing all the elements that match the provided function
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8];

// filter out the even numbers
// const evens = nums3.filter(function (num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
const evens = nums3.filter((num) => num % 2 === 0);
console.log(evens);

// filter out all the numbers from the array that are larger
// than 3

const largerThanThree = nums3.filter(function (num) {
  // if (num > 3) {
  // 	return true
  // }
  // return false
  return num > 3;
});
console.log(largerThanThree);
console.clear();

const places = [
  {
    title: "Awesome Suite 20",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];
// 1. filter all with a price above 300
const priceAbove300 = places.filter((place) => place.price > 300);
console.log(priceAbove300);

const filtered = places
  .filter((place) => !!place.pool)
  .map((place) => place.title);

console.log("Places with Pool", filtered);

// kata solution
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const result = birds.filter(function (bird) {
    // if the bird is not contained in the geese array the return true
    // if (geese.indexOf(bird) === - 1) {
    //   return true
    // }
    // return false
    // if (!geese.includes(bird)) {
    //   return true
    // }
    // return false
    return !geese.includes(bird);
  });
  return result;
}
