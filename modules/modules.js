//Modules

//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require("./names");
const sayHiii = require("./utils");
const data = require("./module-alternative/alternative-flavor");
require("./mind-grenade.js"); //even we don't assign it to a variable, it will run the code inside the file

// console.log(data);

sayHiii(names.john);
sayHiii(names.peter);
sayHiii("Susan");
