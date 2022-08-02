// sort - this sorts an array in place - we change the array
// directly - there is no new array created
const unorderedNums = [1, 30, 21, 4, 100000];
const sortedNums = unorderedNums.sort();
console.log({ sortedNums }, "This ain't sorted wtf!");

const nums6 = [23, 45, 7, 12];

nums6.sort(function (a, b) {
  // this is ascending
  // return a - b

  // this is descending
  // return b - a;

  return b - a;
  // if (b < a) {
  // 	return 4
  // }
  // if (a < b) {
  // 	return - 34
  // }
  // if (a === b) {
  // 	return 0
  // }
});
console.log(nums6);

// sort the reviews ascending by it's rate
const sortedReviews = reviews.sort(function (a, b) {
  return a.rate - b.rate;
});

// this is how you can implement a secondary sort
// criterion

// const sorted = reviews.sort(function (a, b) {
// 	if (a.rate === b.rate) {
// 		return a.score - b.score
// 	}
// 	return a.rate - b.rate
// })
console.log(sortedReviews);
