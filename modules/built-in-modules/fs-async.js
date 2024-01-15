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

// In this program, the JavaScript runtime in Node.js operates asynchronously. The readFile and writeFile functions from the "fs" module are asynchronous operations, meaning they don't block the execution of the rest of the code. Instead, they operate in the background, and their callbacks are executed once the operations are completed.

/* ********************************************************************** */
// example asynchronous function

// console.log("Start");

// // Asynchronous operation
// setTimeout(() => {
//   console.log("Async operation completed");
// }, 2000);

// console.log("Continue with other tasks");

// Output:
// Start
// Continue with other tasks
// Async operation completed (after approximately 2 seconds)

/* ********************************************************************** */
