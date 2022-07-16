// this is a comment

/*
this is a multiline comment
you see... it can have multiple lines!
*/

// hello world in javascript
console.log("hello world");

// you can do more things with console
console.table([1, 2, 3]);
console.table([
  { name: "Monty", age: 30 },
  { name: "Mario", age: 45 },
  { name: "Lucas", age: 25 },
]);
// variables

// declaring a variable
let wizard;

// assign a value to the variable
wizard = "Harry Potter";
wizard = "Hermione Granger";

// how could I log the value for wizard?
console.log(wizard);
// how could I re-assign it to "Albus Dumbledore"
wizard = "Albus Dumbledore";

// initializing a variable (declaring + giving it it's first value)
let mouse = "jerry";

// declaring many variables in one line
let cat, dog, giraffe;
console.log(giraffe);
// const cannot be reassigned
// we use const whenever possible
const theOneWhoShouldNotBeNamed = "Voldemort";
// theOneWhoShouldNotBeNamed = 'Draco Malfoy'; ❌ will throw error, can't change a constant,
// also would be wrong Harry Potter lore!
console.log(theOneWhoShouldNotBeNamed);

// naming - use camelCase
const userName = "Foo";

// Data types

// there are primitive data types and objects
// primitives: number, string, boolean, null, undefined, Symbol

// js is dynamically typed
let num = 23;
console.log(typeof num);
num = "foo";
console.log(typeof num);

console.clear();

// Number
const distance = 9000;
const price = 19.99;
console.log(typeof distance);
console.log(typeof price);

// console.log('hello' * 3) // -> NaN

// mathematical operators

const sum = 3 + 6;
console.log(sum);

console.clear();

// subtraction, division, multiplication
// - , / , *

// Modulo
console.log(7 % 2); // -> 7/2 = 3 -> remainder: 1

let x = 0;
x = x + 1;
x = x + 1;
x += 1; // -> x = x + 1
// x -= 2; x *= 3
x++;
console.log(x);

console.log(Math.pow(10, 5));
console.log("Math.floor(10.9): ", Math.floor(10.9));
console.log("Math.ceil(10.1): ", Math.ceil(10.1));
console.log("Math.round(10.5)", Math.round(10.5));
console.log("Math.round(10.3)", Math.round(10.3));
// generally the Math methods are quite useful

console.clear();

let y = 1;
console.log(y++); // this first gives back value, then increments
console.log(y);

let z = 1;
console.log("z", ++z); // this first increments and then gives back value

// Strings - a sequence of characters
const greeting = "hello";
const sentence = greeting + " world";

// undefined is the unintentional absence of a value
// null is the intentional absence of a value

console.log(undefined);
console.log(null);
let myNull = null;
let myUndefined;
console.log("A variable initialized to null:", myNull);
console.log("A variable not initialized: ", myUndefined);
