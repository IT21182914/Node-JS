const path = require("path");

console.log(path.sep);

const filePath = path.join(
  "/modules",
  "module-alternative",
  "alternative-flavor.js"
);

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(
  __dirname,
  "modules",
  "module-alternative",
  "alternative-flavor.js"
);

console.log(absolute);
