function someCallback() {
  console.log("Hey there 🙂");
}
const first = setTimeout(someCallback, 2000);

const second = setTimeout(() => {
  console.log("Hey there 🙂");
  countUp();
}, 2000);

console.log("this runs first ⏰");
// cancel the first erroneous timeout
clearTimeout(first);

// setInterval
function countUp() {
  console.log("Computer - Count Up!");
  let i = 0;
  const interval = setInterval(() => {
    console.log(++i);
    if (i >= 10) {
      console.log("I am bored 😅 and will stop counting now!");
      console.log("\n");
      clearInterval(interval);
      startCountdown();
    }
  });
}

// let's write a countdown function
function startCountdown() {
  console.log("But the rocket's ready - I am starting the countdown!");
  let i = 10;
  const interval = setInterval(() => {
    console.log(i--);
    if (i <= 0) {
      console.log("Liftoff! 🚀");
      clearInterval(interval);
    }
  }, 500);
}
