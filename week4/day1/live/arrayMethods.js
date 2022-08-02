// filter, map, reduce, forEach

const numbers = [1, 2, 3, 4, 10, 20, 100];

let i = 0;
numbers.filter(() => {
  console.log(i);
  i++;
});

console.log("============");
const newFilteredArray = numbers.filter((currentNumber) => {
  console.log(currentNumber);
  //   if (currentNumber > 10) {
  //     return true;
  //   }
  //   return false;
  return currentNumber > 10;
});

// const newFilteredArray2 = numbers.filter((currentNumber) => currentNumber > 10);

console.log(newFilteredArray);

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const firstHarryPotterChapter = `Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense. Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere. The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. They didn't think they could bear it if anyone found out about the Potters. Mrs. Potter was Mrs. Dursley's sister, but they hadn't met for several years; in fact, Mrs. Dursley pretended she didn't have a sister, because her sister and her good-for-nothing husband were as unDursleyish as it was possible to be. The Dursleys shuddered to think what the neighbors would say if the Potters arrived in the street. The Dursleys knew that the Potters had a small son, too, but they had never even seen him. This boy was another good reason for keeping the Potters away; they didn't want Dudley mixing with a child like that. When Mr. and Mrs. Dursley woke up on the dull, gray Tuesday our story starts, there was nothing about the cloudy sky outside to suggest that strange and mysterious things would soon be happening all over the country. Mr. Dursley hummed as he picked out his most boring tie for work, and Mrs. Dursley gossiped away happily as she wrestled a screaming Dudley into his high chair. None of them noticed a large, tawny owl flutter past the window. At half past eight, Mr. Dursley picked up his briefcase, pecked Mrs. Dursley on the cheek, and tried to kiss Dudley good-bye but missed, because Dudley was now having a tantrum and throwing his cereal at the walls. 'Little tyke,' chortled Mr. Dursley as he left the house. He got into his car and backed out of number four's drive. It was on the corner of the street that he noticed the first sign of something peculiar a cat reading a map. For a second, Mr. Dursley didn't realize what he had seen then he jerked his head around to look again. There was a tabby cat standing on the corner of Privet Drive, but there wasn't a map in sight. What could he have been thinking of? It must have been a trick of the light. Mr. Dursley blinked and stared at the cat. It stared back. As Mr. Dursley drove around the corner and up the road, he watched the cat in his mirror. It was now reading the sign that said Privet Drive no, looking at the sign; cats couldn't read maps or signs. Mr. Dursley gave himself a little shake and put the cat out of his mind. As he drove toward town he thought of nothing except a large order of drills he was hoping to get that day. But on the edge of town, drills were driven out of his mind by something else. As he sat in the usual morning traffic jam, he couldn't help noticing that there seemed to be a lot of strangely dressed people about. People in cloaks. Mr. Dursley couldn't bear people who dressed in funny clothes the getups you saw on young people!`;

const words = firstHarryPotterChapter.split(" ");
const moreThan5 = words.filter((word) => word.length > 5);
console.log(moreThan5);

// map -> maps input values to output values
const ones = numbers.map(() => 1);
console.log(ones);

const twos = numbers.map(() => 2);
console.log(twos);

const identity = numbers.map((elem) => elem);
console.log(identity);

const multBy2 = numbers.map((num) => num * 2);
console.log(multBy2);

// "Harry" -> "HARRY", "Potter" -> "POTTER"
const betterHarryPotter = words
  .map((x) => {
    if (x === "Harry" || x === "Potter" || x === "Dursley") {
      return x.toUpperCase();
    }
    return x;
  })
  .join(" ");

console.log(betterHarryPotter);

// numbers -> sum of them
// array -> single
const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);

console.log(sum);

// count number of occurences of each word

// => { Harry: 0, Potter: 10, I: 100}
const occurences = words.reduce((agg, val) => {
  if (agg[val]) {
    agg[val] += 1;
  } else {
    agg[val] = 1;
  }
  return agg;
}, {});

console.log(occurences);

// const obj = {};
// obj["hello"];

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacter: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comments: "It was really usefull, strongly recommended",
      rate: 4,
    },
    {
      user: "Alvaro Trezeguet",
      comments: "It lasted 2 days",
      rate: 1,
    },
    {
      user: "David Recoba",
      comments: "Awesome",
      rate: 5,
    },
    {
      user: "Jose Romero",
      comments: "Good value for money",
      rate: 4,
    },
    {
      user: "Antonio Cano",
      comments: "It broke really fast",
      rate: 2,
    },
  ],
};

const averageProductRating =
  product.reviews.reduce((acc, currentReview) => {
    return acc + currentReview.rate;
  }, 0) / product.reviews.length;

console.log(averageProductRating);

// reduce(array, function, initialValue)

const onesAgain = numbers.forEach(() => 1);
console.log(onesAgain);
