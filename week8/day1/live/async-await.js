function sleep(amount, resolveValue) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resolveValue);
    }, amount);
  });
}

async function firstAsyncFunction() {
  // instead of .then((result) => console.log(result))
  try {
    const result = await sleep(1000, "1");
    const result2 = result + "!!!!";
    // don't go further... wait.
    console.log(result);
    console.log(result2);
    try {
      const result3 = await sleep(1000, "2");
      console.log(result3);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }

  return "hello there";
}

function normalFunction() {
  return "hello there";
}

console.log(firstAsyncFunction(), normalFunction());
