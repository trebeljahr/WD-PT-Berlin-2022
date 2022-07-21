// a boolean value is either true or false

// boolean expression results in either true or false

console.log(5 < 3);

// > | >=
// < | <=

// equality operator
// === strictly equal -> also the data type has to match
console.log(5 === "5");

// logical operators

// logical and => &&
const number = 8;
console.log("Number smaller than 10 and even?");
if (number < 10 && number % 2 === 0) {
  console.log("Yes it is");
}

// logical or => ||
console.log("Number bigger than 10 or even?");
if (number > 10 || number % 2 === 0) {
  console.log("Yes it is");
}

// negation operator => !
console.log("!true", !true);
console.log("!false", !false);

// logical equal == and ===
if (10 == "10") {
  console.log("This works");
}

// if you don't want to be surprised always use this one!
if (10 === "10") {
  console.log("This doesn't");
}

// logical not equal => !== we read as <x> NOT equal to <y>
console.log("Is 8 equal to 10?");
if (number !== 10) {
  console.log("No 8 is not equal 10!");
}

// conditionals and loops
const age = 30;
console.log("typeof age variable:", age);
if (age > 18) {
  console.log("You are allowed to drive!");
} else if (age === 17) {
  console.log("You can drive with an adult!");
} else {
  console.log("You are too young to drive!");
}

console.log("Is 5 bigger than 7?");
if (5 > 7) {
  console.log("Yes!");
} else {
  console.log("No!");
}

// truthy and falsy values
// falsy values: '', undefined, null, 0, NaN
let passwrd = "jfdk";
if (passwrd) {
  console.log("Password is set!");
} else {
  console.log("Password is not set yet!");
}

// how does !! work any guess?
console.log(!!true);
console.log(!!false);

// questions - guess whether a value is truthy or falsy
// i.e. whether it will be true or false when converted to a boolean
console.log(!!"");
console.log(!!0);
console.log(!!1);
console.log(!!-1);
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!function () {});
console.log(!![]);
console.log(!!{});
console.log(!!"hello");

// ternary operator
let someName = "Wittgenstein";
console.log(
  someName.length > 7
    ? `${someName} - you have quite a long name!`
    : `${someName} - your name is nice and short`
);

someName = "Tim";
console.log(
  someName.length > 7
    ? `${someName} - you have quite a long name!`
    : `${someName} - your name is nice and short`
);

// switch
const result = 1;
switch (result) {
  case 1:
    console.log("You won the 1st prize");
    break;
  case 2:
    console.log("You won the 2nd prize");
    break;
  case 3:
    console.log("You won the 3rd prize");
    break;
  default:
    console.log("Better luck next time!");
    break;
}
