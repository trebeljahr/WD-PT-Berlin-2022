// CLOJURE -> CLOSURE

function helloWorld() {
  let abc = "";
}

helloWorld();

function main() {
  // all of our important stuff goes in here
}

main();

function createAdder(number) {
  let addingNumber = number;
  return (element) => {
    // console.log(addingNumber);
    return element + addingNumber;
  };
}

// let addingNumberGlobal = 5;

const add5 = createAdder(5);
const add10 = createAdder(10);

console.log(add5(10));
console.log(add10(100));

function createGreeter(greeting) {
  return (name) => console.log(greeting + " " + name);
}

const greetings = ["Hola", "Hello", "Bonjour", "Hallo"];
const names = ["Josh", "Patrick", "Antonio", "Joao", "Bernd", "Hector"];

const greeters = greetings.map((greeting) => createGreeter(greeting));

for (let greetFn of greeters) {
  names.forEach(greetFn);
}

// const abc = (a) => (b) => (c) => {
//   return a + b + c;
// };

// abc(1)(2)(3);

function rand255() {
  return Math.floor(Math.random() * 255);
}

function createRandomColor() {
  return `rgb(${rand255()},${rand255()},${rand255()})`;
}

function createColorizer() {
  const color = createRandomColor();
  return () => {
    document.body.style.backgroundColor = color;
  };
}

function createButton() {
  const btn = document.createElement("button");
  btn.innerText = "Click me!";
  document.body.appendChild(btn);
  btn.addEventListener("click", createColorizer());
}

for (let i = 0; i < 10; i++) {
  createButton();
}

function hello() {
  console.log("Hello");
  console.log("world");
  setTimeout(hello, 0);
}

// 0, 1, 1, 2, 3, 5, 8, 13...
function recursiveFib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}

const sortedArray = [1, 2, 5, 10, 11, 20, 100, 111, 125];
const existsInArray = 100;

function exists(arr, numToFind) {
  for (let num of arr) {
    if (num === numToFind) return true;
  }
  return false;
}

function binarySearch(arr, x, leftIndex, rightIndex) {
  if (rightIndex >= leftIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (x === arr[middleIndex]) return true;

    if (x > arr[middleIndex]) {
      return binarySearch(arr, x, middleIndex + 1, rightIndex);
    }

    if (x < arr[middleIndex]) {
      return binarySearch(arr, x, leftIndex, middleIndex - 1);
    }
  }

  return false;
}

// recursiveFib(7);
