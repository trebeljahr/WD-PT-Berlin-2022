const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
];

// use reduce to sum up all the ages in the array

// const sumOfAges = people.map(function (person) {
// 	return person.age
// }).reduce(function (acc, val) {
// 	return acc + val
// })
const sumAges = people.reduce(function (sum, person) {
  return sum + person.age;
}, 0);
console.log(sumAges);
console.clear();
//

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacter: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comments: "It was really usefull, strongly recommended",
      rate: 4,
    },
    {
      user: "Alvaro Trezeguet",
      comments: "It lasted 2 days",
      rate: 1,
    },
    {
      user: "David Recoba",
      comments: "Awesome",
      rate: 5,
    },
    {
      user: "Jose Romero",
      comments: "Good value for money",
      rate: 4,
    },
    {
      user: "Antonio Cano",
      comments: "It broke really fast",
      rate: 2,
    },
  ],
};

// sum up all the rates of this product using reduce
const rates = product.reviews.reduce(function (acc, val) {
  return acc + val.rate;
}, 0);
console.log(rates);
