// function useAnotherFunction(fnc) {
//   fnc();
// }

// useAnotherFunction(() => {
//   console.log("Hello");
// });

// const timerId = setTimeout(() => {
//   console.log("I am called later");
// }, 3000);

// clearTimeout(timerId);

// const intervalId = setInterval(() => {
//   console.log("Hello there from the interval");
// }, 1000);

// setTimeout(function () {
//   clearInterval(intervalId);
// }, 3000);

function countDown(initialNumber) {
  let i = initialNumber;
  const intervalId = setInterval(() => {
    console.log(i);
    i--;
    if (i <= 0) {
      console.log("Liftoff!");
      clearInterval(intervalId);
      countUp(5);
    }
  }, 500);
}

countDown(10);

const countUp = (maximum) => {
  let i = 0;
  const intervalId = setInterval(() => {
    console.log(i);
    i++;
    if (i >= maximum) {
      console.log("Liftoff!");
      clearInterval(intervalId);
    }
  }, 500);
};
