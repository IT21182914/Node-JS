const { readFile, writeFile } = require("fs"); // fs is file system module in node.js

console.log("Start");
readFile(
  "./modules/built-in-modules/content/first.txt",
  "utf-8",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = result;
    readFile(
      "./modules/built-in-modules/content/second.txt",
      "utf-8",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const second = result;
        writeFile(
          "./modules/built-in-modules/content/result-async.txt",
          `Here is the result: ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            // console.log(result); // undefined. Because writeFile doesn't return anything
            console.log("Done with this task");
          }
        );
      }
    );
  }
);

console.log("Starting next task");
