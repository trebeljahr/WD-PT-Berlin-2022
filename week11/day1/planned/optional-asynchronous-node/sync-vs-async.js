const crypto = require("crypto");

const start = new Date();

const salt = crypto.randomBytes(128).toString("base64");
const _ = crypto.pbkdf2("myPassword", salt, 10000, 1024, "sha512");

const end = new Date();
console.log("Hash took", end - start, "milliseconds to compute");

const start2 = new Date();
for (let i = 0; i < 1000000; i++) {
  const a = 10 + i;
  const _ = a / 10;
}
const end2 = new Date();
console.log("1000000 iteration for loop took", end2 - start2, "milliseconds");

const fs = require("fs");
const start3 = new Date();
const file = fs.readFileSync("./lorem-ipsum.txt");
process.nextTick(() => console.log("Next Tick happens after result!"));

console.log(
  `${file.slice(0, 26)}... took ${
    new Date() - start3
  } milliseconds to process synchronously`
);

const start4 = new Date();
fs.readFile("./lorem-ipsum.txt", (err, content) => {
  if (err) throw err;
  console.log(
    `${content.slice(0, 26)}... took ${
      new Date() - start4
    } milliseconds to process`
  );
  startNext();
});

// this is what blocking vs. non-blocking means. the event loop stops ticking for blocking operations until after they are done!
// so no setImmediate, setTimeout or anything like that can happen during those times.
process.nextTick(() => console.log("Next Tick happens before result!"));

// startNext callback only not to mess with execution order
function startNext() {
  // readFile (and other fs methods) are also available as promisified versions
  const { readFile } = require("fs/promises");
  // either like this.
  readFile("./lorem-ipsum.txt", "utf-8").then((data) =>
    console.log("File read had", data.length, "characters")
  );

  // or like this with an IIFE - Immediately Invoked Function Expression
  (async () => {
    const data = await readFile("./lorem-ipsum.txt", "utf-8");
    console.log("File read had", data.length, "characters");
  })();
}
