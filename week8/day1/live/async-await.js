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
    const result = await sleep(1000, "1").then((result) => result);
    // don't go further... wait.
    console.log(result);

    const result2 = await sleep(1000, "2").catch((err) => {
      console.log(err);
    });
    console.log(result2);
  } catch (error) {
    console.log(error);
  }

  return "hello there";
}

function normalFunction() {
  return "hello there";
}

console.log(firstAsyncFunction(), normalFunction());
