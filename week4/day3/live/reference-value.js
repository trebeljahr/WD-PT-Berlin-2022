const obj1 = {};
const obj2 = {};

console.log("obj1 == obj2", obj1 == obj2);
console.log("obj1 === obj2", obj1 === obj2);

const arr1 = {};
const arr2 = {};

console.log("arr1 == arr2", arr1 == arr2);
console.log("arr1 === arr2", arr1 === arr2);

// well how can we compare arrays to arrays?
console.log(
  "serialized comparison",
  JSON.stringify(arr1) === JSON.stringify(arr2)
);

let a = "hello world";
const b = a;

a = a.toUpperCase();
console.log(a);
console.log(b);

const c = { greeting: "hello world", numbers: [1, 2, 3, 4, 5] };
// this is the completely wrong way to copy an object or array
const d = c;
console.log("Is c equal to do?", c === d);

// this is the slightly better way, kinda level 1 nesting solution. SHALLOW copying
const e = { ...c };

// deep copying -> functions are not handled particularly well -> because of scope! -> this, arguments and outside scoped variables are not properly "copied"
const f = JSON.parse(JSON.stringify(c));
// serialize -> convert it into some kind of string -> or other representation

d.greeting = "Something else";

console.log({ c });
console.log({ d });
console.log({ e });
console.log({ f });

// pure functions vs. functions with side effects
function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(c, "name", "Bernd");
console.log({ c });
console.log({ d });
console.log({ e });
console.log({ f });

c.numbers.reverse();
console.log({ e });
console.log({ f });

// different ways of shallow copying arrays.

const original = ["a", "b", "c"];
// shallow copies
const spreadCopy = [...original];
const sliceCopy = original.slice();
const concatCopy = original.concat([]);
const fromCopy = Array.from(original);
const mapCopy = original.map((e) => e);

const ourArray = [1, 5, 2, 3, 6, 4, 5];

function first(arr) {
  console.log(arr);
}

function second(arr) {
  arr.sort((a, b) => a - b);
}

first(ourArray);
second(ourArray);
first(ourArray);

// let window = {};
// window = {};
