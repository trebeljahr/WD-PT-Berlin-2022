// this is a comment

/* multiline comment */

console.log("hello world");
console.log(1);

// console.log("hello world");

// var, let, const
// variable declaration + assignment
let wizardName = "Harry Potter";

console.log(wizardName);
// console.log(wizardName);

// assignment
wizardName = "Albus Dumbledore";

let otherWizardName;
console.log(otherWizardName);
// undefined;

otherWizardName = "Hermione Granger";
console.log(otherWizardName);
otherWizardName = "Not a name at all";
otherWizardName = "Ron Weasley";

let pizza, hotdog, fries;

const myNumber = 10;
const myFavoriteWizard = "Albus Dumbledore";
// myFavoriteWizard = "Harry Potter";

// first const, then if you get error -> then go with let

// -> don't do that. otherWizardName = 10; ❌

// camelCase, PascalCase, kebab-case, underscore_case
let camelCaseLooksLikeThis;

const myBoolean = true;

// null is more intentional than undefined -> absence of a value.
const myNull = null;
const myDecimal = 10.555;

const myFunction = function () {};
const myObject = {};
const myArrays = [];
const mySpecialArray = new Uint8Array();

console.log(typeof myBoolean);
// generally avoid
// if (typeof x === "boolean") {
// }
