// primitives are passed by value, objects are passed by "reference"

// copying an array?
const original = ["a", "b", "c"];
const wrongCopy = original;

// shallow copies
const spreadCopy = [...original];
const sliceCopy = original.slice();
const concatCopy = original.concat([]);
const fromCopy = Array.from(original);

// seemed like they all have worked?
console.log("original:", original);
console.log("wrongCopy:", wrongCopy);
console.log("sliceCopy:", sliceCopy);
console.log("spreadCopy:", spreadCopy);
console.log("concatCopy", concatCopy);
console.log("fromCopy", fromCopy);

console.log("==============");
// but now let's try changing the original
original[3] = "d";
original.push("e");
console.log("original:", original);

console.log("wrongCopy:", wrongCopy);
console.log("sliceCopy:", sliceCopy);
console.log("spreadCopy:", spreadCopy);
console.log("concatCopy", concatCopy);
console.log("fromCopy", fromCopy);
// the result is uhm... weird?!

// understand about how arrays are really stored and compared!
// what does reference mean in this context? -> memory address diagram
console.log(
  "Is [1,2,3] equal to [1,2,3]",
  [1, 2, 3] === [1, 2, 3] ? "yes" : "no"
);

const my123 = [1, 2, 3];
const my123wrongCopy = my123;
// What about this? how could we explain it?
console.log(my123 === my123wrongCopy);

const numbers = [1, 2, 3, 4, 5];

function double(input) {
  // create a copy of arr
  const arr = input;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
}

// probably one of the most common causes of bugs!
const doubled = double(numbers); // -> [2, 4, 6, 8, 10]
console.log({ doubled }); // it worked? didn't it?

// what could be a problem now? hint - think about what numbers could look like now?
console.log({ numbers });

var wizards = ["Harry", "Hermione", "Draco", "Ron"];
function appendWizard(arr, name) {
  arr.push(name);
  console.log("inside: ", arr);
}

appendWizard(wizards, "Minerva");
console.log("outside:", wizards);

function popLastWizard(arr) {
  arr.pop();
  console.log("inside: ", arr);
}

popLastWizard(wizards);
console.log("outside:", wizards);

// methods that do this crazyness are known as mutating! they have "side-effects"
// beware when using them inside functions because they change the value
// of the references used OUTSIDE the function as well because they mutated the value that reference points to!

// another problem - what if we were to nest things?!
const ticTacToeBoard = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "o", "x"],
];

const ticTacToeBoardCopy = [...ticTacToeBoard];
// recap - how could we acess the x in the bottom right corner and change it to an o?
ticTacToeBoard[2][2] = "o";

console.log("original:");
console.table(ticTacToeBoard);

// but what about our copy now?
console.log("shallowCopy:");
console.table(ticTacToeBoardCopy);
// oh no! it changed as well!
// references again huh?

// we copied the references to the internal arrays correctly, but when we change the values behind those references
// we still change both, our copy and the original!

// this is the way to create a copy
// that is not shallow from an array or object
const deepCopy = JSON.parse(JSON.stringify(ticTacToeBoard));
//  two parts to it! make it a string, then parse that string!
ticTacToeBoard[2][2] = "x";
console.log("original:");
console.table(ticTacToeBoard);
console.log("deepCopy:");
console.table(deepCopy);

// all of these ideas are also true for objects!
const obj1 = {};
const obj2 = {};

console.log("obj1 == obj2", obj1 == obj2);
console.log("obj1 === obj2", obj1 === obj2);
