// anything that can be a variable can also be in an array.
const myArray = [
  1,
  "string",
  function () {},
  true,
  {},
  [],
  undefined,
  null,
  NaN,
  "Hector",
  NaN,
];

const names = [];
// push and pop add and remove from end of array
console.log(names[0]);
console.log(names[names.length - 1]);

names.push("Antonio");

console.log(names[names.length - 1]);
names.push("Rico");
names.pop("Rico");
console.log(names[names.length - 1]);

names.push("Bernd", "Patrick");
console.log(names);

names.push(["Bernd", "Patrick", "Mohamed"]);
console.log(names);

// unshift and shift add and remove from start of array
names.unshift("Joshua");
console.log(names);
names.unshift("Rico", "Antonio");
console.log(names);
names.shift();
console.log(names);

console.log(names.indexOf("Antonio"));
console.log(names.includes("Patrick"));

console.log(names.includes("Mohamed"));

// splice
const result = names.splice(1, 3, "Test");
console.log(result);
console.log(names);

// splice, push, pop, shift, unshift -> mutate -> be careful with things that mutate

const countries = ["Spain", "France", "Germany", "Netherlands", "USA"];
// slice
const result2 = countries.slice(1);
console.log(result2);
console.log(countries);

// slice -> second argument "end" is exclusive
const result3 = countries.slice(2, 4);
console.log(result3);

// filter, map, reduce, flat, forEach
for (let country of countries) {
  console.log("For of loop: ", country);
}

countries.forEach((value, index, array) => {
  console.log(".forEach", value);
});

countries.forEach(console.log);

// problem - print all the countries except germany using forEach
countries.forEach((value, index, array) => {
  if (value !== "Germany") {
    console.log(value);
  }
});

// problem - print every 2nd country in our array
countries.forEach((value, index) => {
  if ((index + 1) % 2 === 0) {
    console.log(`${index + 1}th`, value);
  }
});

const logEvery2ndValue = (value, index) => {
  if ((index + 1) % 2 === 0) {
    console.log(`${index + 1}th`, value);
  }
};

countries.forEach(logEvery2ndValue);
names.forEach(logEvery2ndValue);

// only print indeces of the array
names.forEach((_, index) => {
  console.log(index);
});

// function arguments are positional!
