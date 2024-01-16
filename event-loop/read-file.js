const { readFile } = require("fs");

console.log("start first task");

// CHECK FILE PATH!!!!
readFile(
  "./modules/built-in-modules/content/first.txt",
  "utf8",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    console.log("completed first task");
  }
);
console.log("starting next task");
