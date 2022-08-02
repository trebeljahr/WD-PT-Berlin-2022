// calculate the sum of all the numbers in an array
const nums = [2, 4, 6];

const sum = nums.reduce((accumulator, currentValue) => {
  console.log("this is the acc: ", accumulator);
  console.log("this is the value: ", currentValue);
  return accumulator + currentValue;
});
console.log(sum);

const words = ["foo", "bar", "baz"];
// sum of all the string lengths
const wordsSum = words.reduce(function (acc, val) {
  return acc + val.length;
});
console.log(wordsSum);

console.log(typeof "hello");
console.log([1, 2, 3].reverse());
console.log("hello world".split(" ").reverse().join(" "));

console.log([1, 2, 3][0]);
console.log("hello"[0]);

const normal = "hello world it's nice today";
const split = normal.split(" ");
console.log(split);
const reversedWords = split.reverse();
console.log(reversedWords);

const toReverse = (str) => str.split("").reverse().join("");
const word = "hello";
console.log(toReverse(word));

const reversedWordsAndLetters = reversedWords.map(toReverse);
console.log(reversedWordsAndLetters.join(" "));

const toCubeNumber = (n) => Math.pow(n, 3);

const numbers = [1, 2, 3];

console.log(typeof numbers);
const squaredNumbers = numbers.map(toCubeNumber);
console.log("Give them !", squaredNumbers);

const string = "hello this is something I want to say hello";
const split2 = string.split(" ");
console.log("split: ", split2);

const countLetters = (word) => ({ [word]: word.length });
console.log(countLetters("german"));

const wordLengths = split2.map(countLetters);
console.log(wordLengths);

console.log([1, 2, 3].reduce((agg, val) => agg + val, 0));
