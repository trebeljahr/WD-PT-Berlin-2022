// let i = 0;

for (let i = 0; i <= 10; i++) {
  console.log("Hello this is i right now:", i);
}

// scopes -> much more important to functions
// console.log(i);

// backwards
for (let i = 10; i >= 0; i--) {
  console.log("Counting down, i:", i);
}

for (let i = 0; i <= 100; i += 10) {
  console.log("Counting up in steps of 10, i:", i);
}

for (let i = 0; i < 10; i++) {
  const multiplesOfI = i * 100;
  console.log("Multiples of i", multiplesOfI);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0 && i !== 0) {
    console.log("Even", i);
  }
}

for (let i = 0; i < 10000; i++) {
  if (i % 2 === 0 && i !== 0) {
    console.log("Even", i);
  }
}

let mySentence = "This is a sentence I like";
for (let i = 0; i < mySentence.length; i++) {
  console.log(`${i + 1}th character of mySentence`, mySentence[i]);
}

const myWords = mySentence.split(" ");
for (let i = 0; i < myWords.length; i++) {
  console.log(myWords[i]);
}
// for of loops are syntactical sugar for the above :)
for (let word of myWords) {
  console.log(word);
}

let i = 0;
while (i < 100) {
  console.log("Hello", i);
  i++;
}

let j = 0;
while (j < mySentence.length) {
  if (j < 3) {
    mySentence += `${j}`;
  }
  console.log(mySentence);
  j++;
}

// only works in browsers!!!
// let password = "";
// while (password !== "password123") {
//   password = prompt("enter your password");
// }
// alert("Yay you did it");

// for (let elem of array) {
// }

let iterations = 2;
do {
  console.log("Ran the do while loop");
} while (iterations < 1);

while (iterations < 1) {
  console.log("Ran the while loop");
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log("j", j, "i", i);
  }
  // we don't have j -> only in inner scope
  console.log("i", i);
}

// O(n); O(n^2); O(n * log(n))
