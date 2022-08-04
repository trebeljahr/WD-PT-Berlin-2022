const nums = [1, 2, 3, 4, 5, 5, 1, 6, 7];

nums.reverse();

console.log(nums);

function palindromeCheck(str) {
  return str.split("").reverse().join("") === str;
}

const mySet = new Set(nums);
mySet.add(2);
mySet.add(3);
mySet.add(6);

console.log(mySet);

const dedup = [...new Set(nums)];
console.log(dedup);
