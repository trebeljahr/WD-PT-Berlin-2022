function hello() {
  return "Hello";
}

const immediately = hello();

const randomTimeout = () => (Math.floor(Math.random() * 10) + 1) * 1000;

function constructPromise() {
  return new Promise((resolve, reject) => {
    const ourTimeout = randomTimeout();
    console.log("Waiting for...", ourTimeout);

    setTimeout(() => {
      console.log("Inside timeout callback");
      resolve("I am executing after some time yay");
    }, ourTimeout);
  });
}

async function asyncHello() {
  console.log("Starting asyncHello");
  const result = await constructPromise();
  console.log(result);
  const secondResult = await constructPromise();
  console.log(secondResult);
  return "hello";
}

// const value = asyncHello();

// console.log("Return value of asyncHello call:", value);
// value.then((resultOfAsyncHelloPromise) => {
//   console.log("Result of asyncHello promise", resultOfAsyncHelloPromise);
// });

// what would happen now?
console.log("Synchronous Hello");

// sleep function
const sleep = (sleepTimeInMs) => {
  console.log("Going to sleep for at least: ", sleepTimeInMs, "ms");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, sleepTimeInMs);
  });
};

async function doAllTheSteps() {
  console.log("Now doing things");
  await sleep(5000);
  console.log("Do step 1");
  await sleep(1000);
  console.log("Do step 2");
  await sleep(3000);
  console.log("Do step 3");
  await sleep(2000);
  console.log("Do step 4");
  await sleep(randomTimeout());
  console.log("Done");
}

async function doEverythingInOrder() {
  const asyncHelloPromise = asyncHello();
  console.log("Return value of asyncHello call:", asyncHelloPromise);

  const result = await asyncHelloPromise;
  console.log("Result of asyncHello promise", result);

  await doAllTheSteps();
  await sleep(3000);
  console.log("Everything's Done Now");
}

doEverythingInOrder();
