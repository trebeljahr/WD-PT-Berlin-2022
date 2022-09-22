// setTimeout(() => {
//   console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
// }, 500);

// function longCalculation() {
//   const seconds = new Date().getTime() / 1000;
//   while (true) {
//     if (new Date().getTime() / 1000 - seconds >= 2) {
//       console.log("Done calculating");
//       break;
//     }
//   }
// }

// longCalculation();

// const element = document.getElementById("redDiv");
// let start, previousTimeStamp;
// let done = false;

// function reset() {
//   start = undefined;
//   done = false;
//   window.requestAnimationFrame(step);
// }

// function step(timestamp) {
//   if (start === undefined) {
//     start = timestamp;
//   }
//   const elapsed = timestamp - start;

//   if (previousTimeStamp !== timestamp) {
//     const count = Math.min(0.1 * elapsed, 200);
//     element.style.transform = `translateX(${count}px)`;
//     if (count === 200) done = true;
//   }

//   if (elapsed < 2000) {
//     previousTimeStamp = timestamp;
//     if (!done) {
//       return window.requestAnimationFrame(step);
//     }
//   }

//   if (done) reset();
// }

// window.requestAnimationFrame(step);

// const longCalcBtn = document.createElement("button");
// longCalcBtn.innerText = "Do Long Calculation!";
// document.body.appendChild(longCalcBtn);
// longCalcBtn.addEventListener("click", longCalculation);

// // const resetBtn = document.createElement("button");
// // resetBtn.innerText = "Restart animation!";
// // document.body.appendChild(resetBtn);
// // resetBtn.addEventListener("click", reset);

// const btn = document.createElement("button");
// btn.innerText = "Update random number";
// document.body.appendChild(btn);
// btn.addEventListener("click", updateRandomNumber);

// const randomNumberElem = document.createElement("div");
// document.body.appendChild(randomNumberElem);

// function updateRandomNumber() {
//   console.log("Updating random number!");
//   randomNumberElem.innerText = Math.random();
// }
// updateRandomNumber();

async function main() {
  console.log("From main()");
}

setTimeout(() => {
  console.log("From Timeout");
}, 0);

main().then(() => console.log("From .then in Promise"));
