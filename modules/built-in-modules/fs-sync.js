const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const first = readFileSync(
  "./modules/built-in-modules/content/first.txt",
  "utf8"
);

const second = readFileSync(
  "./modules/built-in-modules/content/second.txt",
  "utf8"
);
console.log(first, second);

writeFileSync(
  "./modules/built-in-modules/content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" } // you can use this to append the text.append means add the text to the end of the file
);

//Another way

// const firstFilePath = path.join(__dirname, "content", "first.txt");
// const secondFilePath = path.join(__dirname, "content", "second.txt");

// const first = readFileSync(firstFilePath, "utf8");
// const second = readFileSync(secondFilePath, "utf8");

// console.log(first, second);

// writeFileSync(
//   path.join(__dirname, "content", "result-sync.txt"),
//   `Here is the result: ${first}, ${second}`,
//   { flag: "a" } // you can use this to append the text.append means add the text to the end of the file
// );

// console.log("__dirname", __dirname);
