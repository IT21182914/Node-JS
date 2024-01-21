const http = require("http"); //http is a built-in module in Node JS. we don't need to install it.

//server to listen to the request and respond to it with a callback function that takes in two parameters

const server = http.createServer((req, res) => {
  console.log("user hit the server");
});

server.listen(5000); //if we think about bank, we have different numbers for different things.like press number 1 for balance, press number 2 for transfer money etc. here 5000 is the number for our server.
