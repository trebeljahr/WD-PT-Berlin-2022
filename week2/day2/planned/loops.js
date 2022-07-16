// iterations
// for loop
console.log("Log the numbers 1 to 10 pleeease :)");
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// how could I count down from 10?
console.log("Now count down from 10");
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// could you include the 0 when counting?
console.log("Now count down from 10");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// ok. now let's log LIFTOFF when we reach 0 shall we?
console.log("Now count down from 10");
for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("LIFTOFF!!! 🚀");
  } else {
    console.log(i);
  }
}

// same logic but with a while loop
let counter = 1;
console.log("Log the numbers 1 to 10 pleeease, but with a while loop!");
while (counter < 11) {
  console.log(counter);
  counter++;
}

// only works in browser!
let password;
while (password !== "123") {
  password = prompt("enter your password");
}
// if we reach this line the password is correct
alert("password is correct 🦄");
