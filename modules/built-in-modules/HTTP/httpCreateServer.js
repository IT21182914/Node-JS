const http = require("http");

//req is what we get from the client
//res is what we send back to the client
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Welcome to our home page</h1>");
  }
  if (req.url === "/about") {
    res.end("<h1>Here is our short history</h1>");
  }
  res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `);
});

server.listen(5000);
