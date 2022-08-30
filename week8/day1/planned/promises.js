// function callback(result) {
//   console.log("Result is:", result);
// }

// setTimeout(() => {
//   console.log("Logs first");
//   callback(3);
// }, 3000);

// console.log("Very first");

// introducing the promise datatype
const promise = new Promise((resolve, reject) => {
  resolve("Hello");
  //   reject("An Error has Occured");
});

promise
  .then((result) => {
    console.log(result);
    const nextPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("World");
      }, 3000);
    });
    return nextPromise;
  })
  .then((result2) => {
    console.log(result2);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    const fast = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Turtle");
      }, 100);
    });

    const slow = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Aristotle");
      }, 100);
    });

    const racingPromise = Promise.race([slow, fast]);

    racingPromise
      .then((winnerOfTheRace) => {
        console.log("Hey you are the winner:", winnerOfTheRace);
      })
      .finally(() => {
        slow
          .then((result) => console.log(result))
          .finally(() => console.log("Race is finished"));
      });

    const race = Promise.all([slow, fast]);
    race.then((arrayOfResults) => {
      console.log("Array of Results:", arrayOfResults);
    });
  });
