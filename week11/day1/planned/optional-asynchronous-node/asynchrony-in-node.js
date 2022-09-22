const fs = require("fs");
const request = require("request");
const chalk = require("chalk");

function scheduleNextTickFrom(from) {
  process.nextTick(() => {
    process.stdout.write(`nextTick() scheduled from ${from}\n`);
  });
}

process.stdout.write("\n\n--------------- START ---------------\n\n");

// NEXT TICK
process.nextTick(() => {
  process.stdout.write("NT1: nextTick()\n");
  scheduleNextTickFrom("process.nextTick");
});

// 1. IO / FILESYSTEM POLLING
fs.readFile("./data/read.txt", (err, res) => {
  process.stdout.write("3: fs.readFile\n");
  scheduleNextTickFrom("fs.readFile");
});

// 2. NETWORK POLLING
request.get("https://google.com", (err, res, body) => {
  process.stdout.write("1: Network Calls HTTP GET/POST \n");
  scheduleNextTickFrom("request.get");
});

// 3. SET IMMEDIATE
setImmediate(() => {
  process.stdout.write("2: SET IMMEDIATE\n");
  scheduleNextTickFrom("setImmediate");
});

// 4. SET TIMEOUT
setTimeout(() => {
  process.stdout.write("4: TIMERS\n");
  scheduleNextTickFrom("setTimeout(0)");
}, 0);

let counter2 = 0;
async function recursive2() {
  Promise.resolve("Instantly Resolved Promise").then((value) =>
    console.log(value, counter2)
  );

  setImmediate(() => {
    console.log("setImmediate from recursive2", counter2);
  });
  process.nextTick(() => {
    console.log("nextTick from recursive2", counter2);
  });
  setTimeout(() => {
    if (counter2++ < 10) {
      console.log("setTimeout from recursive2:", counter2);
      recursive2();
    }
  }, 0);
}
recursive2();

setTimeout(() => {
  process.stdout.write("0: First Longer Timeout\n");
  setImmediate(() => {
    process.stdout.write("setImmediate from 1. setTimeout(1000)\n");
    scheduleNextTickFrom("setImmediate");
  });
  scheduleNextTickFrom("1. setTimeout(1000)");
  setTimeout(() => {
    process.stdout.write("\n--------------- END ---------------\n\n");
  }, 0);
}, 1000);

setTimeout(() => {
  setImmediate(() => {
    process.stdout.write("setImmediate from 2. setTimeout(1000)\n");
    scheduleNextTickFrom("setImmediate");
  });

  process.stdout.write("0: Second Longer Timeout\n");
  scheduleNextTickFrom("2. setTimeout(1000)");
}, 1000);

const fibonacci = require("fibonacci");
// 5. ASYNC CALLBACKS / USERLAND
process.stdout.write(
  "5: Fibonacci(20) " +
    fibonacci.iterate(20).number +
    " ASYNC CALLBACK {USERLAND}\n"
);

async function whatAboutPromises() {
  process.stdout.write("Calling Async Function\n");
  Promise.resolve("Immediate Promise").then((res) =>
    console.log(res, counter2)
  );
  const promise = await new Promise((resolve) => {
    process.stdout.write("Promise Constructor Callback\n");
    scheduleNextTickFrom("Promise Constructor\n");
    setTimeout(() => {
      process.stdout.write("Within Timeout in Promise\n");
      resolve("'hello'");
    }, 0);
  });
  process.stdout.write("Value from Promise: " + promise + "\n");
}

whatAboutPromises().then(() => {
  process.stdout.write("Async Function completed\n");
});

// NEXT TICK
process.nextTick(() => {
  process.stdout.write("NT2: nextTick()\n");
});

let counter = 0;

function recursive() {
  process.nextTick(() => {
    if (counter++ < 10) {
      console.log("Next tick from Recursive:", counter);
      recursive();
    }
  });
}

recursive();

let stop = false;
let stackSize = 0;
function stackOverflowError() {
  if (++stackSize % 1000 === 0) {
    console.log("Recursive Stack Overflow Error:", stackSize);
  }

  if (stop) return;
  stackOverflowError();
}
setTimeout(() => {
  try {
    stackOverflowError();
  } catch (error) {
    stop = true;
    console.log("Final Stack Size when Error Happened: ", stackSize);
    console.log(chalk.red(error));
    console.log(chalk.green("Waiting for setTimeout to finish..."));
    setTimeout(() => {
      console.log("This executes after the stackOverflowError happened");

      let off = false;
      function stopIt() {
        console.log("Turning it off!");
        off = true;
      }

      function infiniteRecursive() {
        setImmediate(() => {
          if (off) return;
          if (++counter % 100000 === 0) {
            console.log("setImmediate from Infinite Recursive:", counter);
          }
          infiniteRecursive();
        });
        // setTimeout(() => {
        //   console.log("setTimeout from Infinite Recursive:", counter++);
        //   if (off) return;
        //   infiniteRecursive();
        // }, 0);

        // process.nextTick(() => {
        //   console.log("nextTick() from Infinite Recursive:", counter++);
        //   if (off) return;
        //   infiniteRecursive();
        // });
      }

      console.log("Preparing to start infinite recursion in 2 seconds!");
      setTimeout(() => {
        infiniteRecursive();
        setTimeout(stopIt, 3000);
      }, 2000);
    }, 3000);
  }
}, 2000);
