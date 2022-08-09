// eventually let's use strict mode
// "use strict";

let myNewVariable;

function computeSum(a, b) {
  myNewVarible = a + b;
  return myNewVariable;
}

const result = computeSum(10, 4);
console.log("result: ", result);
// huuuuh?! why is this undefined.

// intro -> the window object.
console.log(window);
console.log(window.myNewVarible);

a1 = 10;
window.a2 = 10;
var a3 = 10;
let a4 = 10;
const a5 = 10;

console.log(window);

// global variables, while useful have no!! safety within them. -> don't do the below at home!
setTimeout = () => console.error("You have been fooled");
// looks just like a normal setTimeout call does it?
setTimeout(() => {}, 3000);

// shadowing -> don't do!
function mySum(a1, a2) {
  // you see how a1 and a2 overwrite the globals, but only in this scope?
  a1 = 20;
  a2 = 20;
  a3 = 20;
  var aaaaaNotInWindow = 0;
  console.log(window);

  return aaaaaNotInWindow;
}

mySum(5, 10);
