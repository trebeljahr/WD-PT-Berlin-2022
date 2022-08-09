// strict mode!
"use strict";

let thisIsInTheGlobalScope = "hello";

{
  let thisIsOnlyInBlockScope = "hello";
}

function anyFunctionName() {
  let thisIsFunctionScoped = "hello";
}

// what does this even do?
// a = 10;

// console.log(thisIsOnlyInBlockScope);

let myNewVariable;

function computeSum(a, b) {
  myNewVarible = a + b;
  return myNewVariable;
}

const result = computeSum(10, 5);
console.log("result", result);

a1 = 10;
window.a2 = 10;
var a3 = 10;

let a4 = 10;
const a5 = 10;

console.log(window);

// never do this please
function mySum(a1, a2) {
  a1 = 20;
  a2 = 20;
  a3 = 20;
  var aaaaaNotInWindow = 0;

  let setTimeout = () => {};
  setTimeout();

  console.log(window);
  return aaaaaNotInWindow;
}

mySum();

// educational examples -> never ever do this in real code.
setTimeout = () => {
  console.error("This is bad!");
};

setTimeout(() => {
  console.log("Hello world");
}, 1000);

// const consoleLogCopy = console.log;
// console.log = function () {
//   consoleLogCopy(
//     ...[...arguments].map((element) => element.split("").reverse().join(""))
//   );
// };

// console.log("hello there");
// console.log(42);

// console.log(letHelloWorld);
// let letHelloWorld = "helloWorld";

// console.log(constHelloWorld);
// const constHelloWorld = "helloWorld";

// var varHelloWorld;
// console.log(varHelloWorld);
// varHelloWorld = "helloWorld";

// function declarations
function helloThere() {}

// function expressions
const myArrowFunction = () => {};
const myFunction = function () {};
