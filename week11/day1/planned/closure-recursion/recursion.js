function recursiveFib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

let counter = 0;
createNewButton(() => {
  counter++;
  const nthFib = recursiveFib(counter);
  console.log(`${counter}th Fib: ${nthFib}`);
}, "Next Fib please :)");
