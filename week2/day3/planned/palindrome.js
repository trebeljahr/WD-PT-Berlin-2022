const options = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "a",
  "abc",
  "000c???",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
  "hello",
];

for (let palindromeCheck of options) {
  //   let palindromeCheck = "Was it a car or a cat I saw?";
  let word = palindromeCheck.toLowerCase().replace(/[^a-zA-z]/g, "");
  let isPalindrome = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      //   console.log(word[i], word[word.length - 1 - i]);
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    console.log(palindromeCheck, "✅");
  } else {
    console.log(palindromeCheck, "❌");
  }
}
