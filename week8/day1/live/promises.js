// setTimeout(() => {
//   console.log("first");
//   setTimeout(() => {
//     console.log("second");
//     setTimeout(() => {
//       console.log("third");
//     }, 1000);
//   }, 1000);
// }, 1000);

// promises are a datatype

// promises can be constructed and consumed

// let's construct one
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("hello"), 3000);
// });

// promise can have different states

// pending...
// success/fulfilled
// error

// console.log(promise1);

// setTimeout(() => console.log(promise1), 2000);

// promise1
//   .then((result) => {
//     console.log(result);
//     return result + "!!!!!";
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve) => {
//       setTimeout(() => resolve("1"), 3000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve) => {
//       setTimeout(() => resolve("2"), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve) => {
//       setTimeout(() => resolve("3"), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .then(() =>
//     sleep(3000, "hello")
//       .then((result) => {
//         console.log(result);
//         return sleep(1000, "1");
//       })
//       .then((result) => {
//         console.log(result);
//         return sleep(1000, "2");
//       })
//       .then((result) => {
//         console.log(result);
//         return sleep(1000, "3");
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         console.log("This should go last!");
//       })
//   );

function sleep(amount, resolveValue) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resolveValue);
    }, amount);
  });
}

const failingPromise = new Promise((_, reject) => {
  reject("Error message goes in here");
});

failingPromise.catch((err) => {
  console.log(err);
});

console.log(failingPromise);

setTimeout(() => {
  console.log("from the timeout");
}, 0);

console.log("hi there");

// Promise.all and Promise.race
const whichIsFaster = Promise.race([
  sleep(1000, "first"),
  sleep(2000, "second"),
  sleep(2000, "second"),
  sleep(2000, "second"),
  sleep(2000, "second"),
  sleep(2000, "second"),
]);

whichIsFaster.then((result) => {
  console.log(result);
});

const allResolved = Promise.all([sleep(1000, "first"), sleep(2000, "second")]);

allResolved
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
