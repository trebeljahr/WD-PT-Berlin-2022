// Strings - a sequence of characters
const greeting = "hello";
const sentence = greeting + " world";
// within backticks we can add a variable within ${}
const templateString = `${greeting} world`;
console.log(sentence);
console.log(templateString);

// ok - new variable - with a name;
const rico = "Rico";
// how do we console.log("Hello Rico now using template strings?")
console.log(`Hello ${rico}`);
// how would we do it with string concatenation?
console.log("Hello " + rico);
// careful about the spaces!

// string properties and methods
// <String>.length -> num of characters in that string
console.log(sentence.length);

// what do you think this will log?
console.log("abc".length);
// what do you think this will log?
console.log("a. b? c!".length);

// accessing characters of a string
const str = "world";
// use the bracket notation
console.log(str[1]);
// remember: strings are array like! essentially arrays of characters
// in languages like C - that's EXACTLY what they are

// use charAt instead of
console.log(str.charAt(0));
// get the last char of a string
console.log(str.charAt(str.length - 1));

// get the index of a specific char
// indexOf returns the index of a char
const index = str.indexOf("d");
console.log(index);
// you could also use lastIndexOf()

// slice()
// slice returns a substring from a string within a given range
// const str = 'world';
console.log(str.slice());

console.clear();

let username = "alice";
// toUpperCase() turns a string to uppercase
console.log(username.toUpperCase());
// strings are immutable -> they have to be reassigned
username = username.toUpperCase();
console.log(username);

//
const upperCased = username.charAt(0).toUpperCase() + username.slice(1);
console.log(upperCased); // -> 'Alice'

// have a guess what could be the method for lowering the case?
const screaming = "THIS IS A SCREAM!";
const lowerCased = screaming.toLowerCase();
console.log(screaming);
console.log(lowerCased);
