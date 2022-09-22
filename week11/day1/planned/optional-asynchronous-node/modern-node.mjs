// in modern node we can use top level await as well.
import { readFile } from "fs/promises";
const data = await readFile("./lorem-ipsum.txt", "utf-8");
console.log("File read had", data.length, "characters");
