// object collections that are unordered, key-value pairs
const emptyObj = {};

// a data structure to group related information
const person = {
  name: "Rico",
  lastName: "Trebeljahr",
  address: {
    street: "Imaginary Street",
    houseNumber: "16",
    country: "Germany",
  },
  city: "Berlin",
  hobbies: ["Volleyball", "Photography", "Traveling"],
  greet: () => {
    console.log("Hello there!");
  },
  key: "hello here I am",
};

console.log(person["name"]);
console.log(person.name);

// method -> OOP
person.greet();

console.log("Hello I like", person.hobbies[1]);

console.log(
  `Hello I am ${person.name} and I live in ${person.address.street} at house number ${person.address.houseNumber}`
);

// object - destructuring
const {
  name: firstName,
  address: { street, houseNumber },
} = person;

console.log(
  `Hello I am ${firstName} and I live in ${street} at house number ${houseNumber}`
);

// console.log(address);

const key = "lastName";

// wrong -> this gives the value of the key "key" on object
console.log(`${person.key}`);

// correct -> this gives the value of the variable content within key
console.log(person[key]);
// does -> person.lastName; because "lastName" is the value of variable "key";

const personKeys = Object.keys(person);
// how to obtain an array of object keys?!
console.log(personKeys);

for (let i = 0; i < personKeys.length; i++) {
  console.log(i);
  const key = personKeys[i];
  console.log(key);
  console.log(person[key]);
}

console.log("=================");
for (let key of personKeys) {
  console.log(person[key]);
}

console.log("=================");
for (let key in person) {
  console.log("...........");
  console.log(key);
  console.log(person[key]);
}

console.log("=================");
personKeys.forEach((key) => console.log(person[key]));

console.log("=================");
const personValues = Object.values(person);
personValues.forEach((value) => console.log(value));

// ["key", "value"]
console.log(Object.entries(person));

person.city = "Paris";
person.hobbies[0] = "Basketball";
person.hobbies.push("Coding");

console.log("=================");
console.log(person);

delete person.key;
delete person.city;

console.log("=================");
console.log(person);
