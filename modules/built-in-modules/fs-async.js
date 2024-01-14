const { readFile, writeFile } = require("fs"); // fs is file system module in node.js

//destructuring readFile and writeFile from fs module.destructuring is used to extract properties from objects and bind them to variables.that means we can extract properties from objects and bind them to variables.in above line we are extracting readFile and writeFile from fs module and binding them to variables.Otherwise we can use it as const fs = require('fs'); fs.readFile(); fs.writeFile();.But we are using destructuring here.

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
