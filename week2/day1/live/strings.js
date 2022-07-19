let wizardFirstName = "Harry";

// won't add spaces;
let wizardFullName = wizardFirstName + " " + "Potter" + " " + "2";
console.log(wizardFullName);

// template literal
const wizardFullName2 = `${wizardFirstName} Potter ${2}`;
console.log(wizardFullName2);

console.log(wizardFullName.length);

// indexing into a datatype -> usually are arrays, strings
console.log(wizardFullName[0]);
console.log(wizardFullName.charAt(0));

// last character of a string
console.log(wizardFullName[wizardFullName.length - 1]);

// don't do this I guess.
console.log(
  "without -1 in the index at the end",
  wizardFullName[wizardFullName.length]
);
// console.log(wizardFullName[wizardFullName.length].join(""));

// get the charCode of a character from string at pos 0;
console.log(wizardFullName.charCodeAt(0));
console.log("❌".charCodeAt(0));

const abc = "abc";
console.log(abc.charCodeAt(0));
console.log(abc.charCodeAt(1));
console.log(abc.charCodeAt(2));

console.log(String.fromCharCode(73));

const splitString = wizardFullName.split(" ");
console.log(splitString);

console.log(splitString.join(" "));

console.log(wizardFullName.indexOf("t"));

console.log(wizardFullName.toUpperCase());
console.log(wizardFullName.toLowerCase());

const rest = wizardFullName.slice(1);
console.log(rest);

const lowerCaseWord = "water";
const onlyFirstUppercased =
  lowerCaseWord[0].toUpperCase() + lowerCaseWord.slice(1);
console.log(onlyFirstUppercased);
