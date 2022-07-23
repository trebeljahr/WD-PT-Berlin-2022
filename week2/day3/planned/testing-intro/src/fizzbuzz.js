function fizzBuzz(num) {
  let string = "";
  if (num % 3 === 0) string += "fizz";
  if (num % 5 === 0) string += "buzz";

  // let's add another test case as well
  return string || num;
}

if (typeof module !== undefined) {
  module.exports = fizzBuzz;
}
