const name1 = "Patrick";
const name2 = "Joshua";
const name3 = "Antonio";

// const name1Reverse = name1.split("").reverse().join("");
// console.log("Hello", name1Reverse);

// const name2Reverse = name1.split("").reverse().join("");
// console.log("Hello", name2Reverse);

// const name3Reverse = name1.split("").reverse().join("");
// console.log("Hello", name3Reverse);

// function reverseString() {
//   let i = 0;
// }

// console.log(i);

function helloWorld() {
  console.log("Hello world");
}
// helloWorld();

// function definition
function sayGreeting(name) {
  console.log("Hello " + name);
}
// sayGreeting("Mario");
// sayGreeting("World");
// sayGreeting("Georgio");
// sayGreeting("Harry Potter");

function reverse(str) {
  return str.split("").reverse().join("");
}

// const reversedName1 = reverse(name1);
// sayGreeting(reversedName1);

// f(y) -> y = g(x) f(g(x))
sayGreeting(reverse(name1));
sayGreeting(reverse(name2));
sayGreeting(reverse(name3));

// functions are just data. -> functions are "first class-citizens"
const myFunction = function () {
  return "My name is Rico";
};

const resultOfMyFunction = myFunction();
// console.log(resultOfMyFunction);

// that's definitely possible! to pass functions as arguments to other functions
// function anotherFunction(someFunction) {
//   return someFunction();
// }

// function factories -> currying -> pre-applying arguments to a function
function createAdder(thingToAdd) {
  return function (a) {
    return a + thingToAdd;
  };
}

const add5ToSomething = createAdder(5);
// add5ToSomething === function(a) { return a + 5}
console.log(add5ToSomething(10));

const add10ToSomething = createAdder(10);

// arrow functions: () => {}
const myArrowFunction = () => {};
const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 20));

// arrow function can have implicit returns;
const sumWithImplicitReturn = (a, b) => a + b;

console.log(add5ToSomething(10));
console.log(sum(10, 5));
console.log(sum(12, 5));
console.log(sum(15, 5));
console.log(sum(5, 5));
console.log(sum(9, 5));
