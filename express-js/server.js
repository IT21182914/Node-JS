const http = require("http");

// this is for the server to listen to the request and respond to it with a callback function that takes in two parameters req and res which are the request and response objects respectively and the callback function is executed every time a request is made to the server and the server responds to it
const server = http.createServer((req, res) => {
  console.log("user hit the server");
});

server.listen(5000);
