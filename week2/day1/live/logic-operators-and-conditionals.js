const ourTrue = true;

console.log(5 < 3);

const is5SmallerThan3 = 5 < 3;

// execute stuff between {} only if condition is truthy
const condition = false;
if (condition) {
  console.log("Hi");
}

if (5 < 3) {
  console.log("WHUUT?");
}

const age = 54;
const legalAge = 18;

const isOverLegalAge = age > legalAge;
if (isOverLegalAge) {
  console.log("You are over the legal age - wohoo");
}

const under100 = age < 100;
// and
if (isOverLegalAge && under100) {
  console.log("Under 100 and over legal age");
}

// if any in a chain of ands is false -> the whole expression is false
// if (isOverLegalAge && under100 && true && false) {
//   console.log("Under 100 and over legal age");
// }

// short-circuiting
// if (false && myExpensiveFunction(5, 10)) {
// }

const a = 10;

// equality -> ==, ===
if (5 === a) {
  console.log("a is 5");
}

if ("5" == a) {
  console.log("a is sorta '5'");
}

// use triple equals, except if you specifically want to compare with conversions
if ("5" === a) {
  console.log("a is '5'");
}

if (a) {
  console.log("Hello this is executed");
}

// ! -> the negate operator
console.log(!false);

let hello;
console.log("What is 5 as a boolean?", !!5);
console.log("What is 0 as a boolean?", !!0);
console.log("What is ? as a boolean?", !!"?");
console.log("What is not as a boolean?", !!"not");
console.log("What is 'true' as a boolean?", !!"true");
console.log("What is 'false' as a boolean?", !!"false");
console.log("What is undefined as a boolean?", !!undefined);
console.log("What is an empty variable as a boolean?", !!hello);
console.log("What is null as a boolean?", !!null);
console.log("What is '' as a boolean?", !!"");
console.log("What is -1 as a boolean?", !!-1);
console.log("What is NaN as a boolean?", !!NaN);
console.log("What is '0' as a boolean?", !!"0");
console.log(
  "What is charCode 0 as a string as a boolean?",
  !!String.fromCharCode(0)
);

if (hello) {
  console.log("Hello world");
} else {
  console.log("There's nothing here");
}

// chained if/else blocks
// if (a) {
// } else if (b) {
// } else if (c) {
// }

switch (a) {
  case 1:
    console.log("Hello a is 1");
    break;
  case 10:
    console.log("Hello a is 10");
    break;
  default:
    console.log("We don't know what a is... sry");
}

// ? -> ternary statement
let result;
const b = 11;
if (b > 10) {
  result = 20;
} else {
  result = 0;
}

let ternaryResult = b > 10 ? 20 : 0;

console.log(result);

// nested ternary
let ternaryResult2 = b > 10 ? (c > 10 ? 20 : 10) : 0;
// let intermediateResult = c > 10 ? 20 : 10;
// let ternaryResult2 = b > 10 ? intermediateResult : 0;
