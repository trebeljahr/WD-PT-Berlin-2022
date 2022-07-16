// functions

// a way to delay the execution of code, and make it re-usable
// also a way to create mappings between in and output
function helloWorld() {
  console.log("Hello World");
}

// FUNCTIONS HAVE: AT LEAST 3 things
// the function keyword:
// function
// the function name
// helloWorld
// the function body
// {
//   everything inside the curlie moustaches
// }

// this doesn't log anything yet...
// why?

// a function has to be called for it's body to be executed
helloWorld();

/* 

1 -> 1
function can either:
return a value
or return undefined
*/

const empty = helloWorld();
console.log("What is returned if nothing is returned?", empty);

/* 
think of it as JS always appending
return undefined
at the end of the function body 
*/

function helloWorldButWithReturn() {
  return "Hello World";
}
const message = helloWorldButWithReturn();
// question -> what is the value of message here?
console.log(message);

// there are other ways to define functions as well

// function expression
const greetAsFunctionExpression = function () {
  console.log('hello from a "normal" function expression');
};

// arrow functions
const greetAsExpressionEs6 = () => {
  // this is called the function body.
  // it will only execute when the function is called.
  console.log("hello from ES6 arrow function expression");
};

greetAsFunctionExpression();
greetAsExpressionEs6();

function greet(name, message) {
  const str = message + " " + name;
  // return is the "result" of the function, it's what you get when you call a function
  return str;
  console.log("this is not executed");
}
const greeting = greet("Dumbledore", "Hi");
console.log(greeting); // 'Hi Dumbledore'

function sum(a, b) {
  const sum = a + b;
  return sum;
}

const shortSum = (a, b) => a + b;
// question: how would a product function look like?
// what about a squaring function?

const res = sum(3, 6);
console.log("Sum result", res);

console.log(
  "Is shortSums result the same as sums?",
  shortSum(3, 6) === sum(3, 6) ? "Yes" : "No"
);

// functions can have multiple return statements
const shallPass = (personIsEvil) => {
  if (personIsEvil) {
    return "You shall not pass!";
  } else {
    return "Ok, you are not evil, you can pass :)";
  }
};

const shallPassWithEarlyReturn = (personIsEvil) => {
  if (personIsEvil) {
    return "You shall not pass!";
  }
  return "Ok, you are not evil, you can pass :)";
};

console.log(shallPass(true));
console.log(shallPass(false));

// let's write a function to find the biggest number in an array
const findBiggestNumber = (array) => {
  if (!array.length) return "No numbers in the provided array";

  let biggestSoFar = -Infinity;
  for (const current of array) {
    if (current > biggestSoFar) {
      biggestSoFar = current;
    }
  }

  return biggestSoFar;
};

console.log(findBiggestNumber([1, -2, 3, 10]));

// let's write a function to multiply all the elements in an array
const multiplyElements = (array) => {
  let result = 1;
  for (const number of array) {
    result = result * number;
  }
  return result;
};

console.log(multiplyElements([2, 5, 3]));

// let's write a function that gives us the length of a word and also logs it
const findWordLengthOf = (word) => {
  return word.length;
};

const totalLengthOfAllWordsInArray = (array) => {
  let sum = 0;
  for (const word of array) {
    sum += findWordLengthOf(word);
  }
  return `Sum of ${array} is: ${sum}`;
};

console.log(totalLengthOfAllWordsInArray(["hello", "no", "what"])); // 11

// let's write a function that finds a number
const findNumber = (array, numberWeSearchFor) => {
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (number === numberWeSearchFor) {
      return number + " exists in array at index: " + i;
    }
  }
  return "Number not in array";
};

console.log(findNumber([22, 35, 41, 1, 3], 41));
console.log(findNumber([22, 35, 41, 1, 3], 42));

// let's write a function that picks two random entries from an array
const pickRandomFrom = (array) => {
  const atRandomIndex = Math.floor(Math.random(0, 1) * array.length);
  const pick = array[atRandomIndex];
  return pick;
};

console.log(pickRandomFrom([1, 2, 3, 4, 5]));

// let's test it to see if our pickRandom is performing kind of ok
const outputCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const arrayToTest = [1, 2, 3, 4, 5];

for (let i = 0; i < 100000; i++) {
  const pick = pickRandomFrom(arrayToTest);
  outputCount[pick]++;
}

console.log(outputCount); // seems fair?

// could we write  a function that initializes the outputCount based on the arrayToTest?
function createOutputCountObject(array) {
  const out = {};
  for (let number of array) {
    out[number] = 0;
  }
  return out;
}

console.log(createOutputCountObject([2, 4, 6, -1]));

// could we now abstract what we wrote above into a function, something like countResults of any function?
// sure we can
function countResults(iterations, arrayToTest, functionToTest) {
  const outputCount = createOutputCountObject(arrayToTest);

  for (let i = 0; i < iterations; i++) {
    const pick = functionToTest(arrayToTest);
    outputCount[pick]++;
  }
  return outputCount;
}

const iterations = 10000;
console.log(countResults(iterations, [1, 2, 3], pickRandomFrom));

// curry!
const makeAdder = (a) => (b) => a + b;

const addFiveToNumber = makeAdder(5);
// typeof addFiveToNumber?
console.log(addFiveToNumber(10));

const addTenToNumber = makeAdder(10);
// typeof addTenToNumber?
console.log(addTenToNumber(100));
