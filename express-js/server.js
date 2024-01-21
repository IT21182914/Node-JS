const http = require("http"); //http is a built-in module in Node JS. we don't need to install it.

//server to listen to the request and respond to it with a callback function that takes in two parameters

const server = http.createServer((req, res) => {
  console.log("user hit the server");
});

server.listen(5000);
