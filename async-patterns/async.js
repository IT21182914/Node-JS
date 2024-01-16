const { readFile, writeFile } = require("fs").promises; //destructuring readFile from fs module
// const util = require("util"); //util module

// const readFilePromise = util.promisify(readFile); //promisify readFile
// const writeFilePromise = util.promisify(writeFile); //promisify writeFile

const start = async () => {
  try {
    const first = await readFile(
      "./modules/built-in-modules/content/first.txt",
      "utf8"
    );
    const second = await readFile(
      "./modules/built-in-modules/content/second.txt",
      "utf8"
    );
    await writeFile(
      "./modules/built-in-modules/content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./modules/built-in-modules/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
