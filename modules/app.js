const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    //BLOCKING CODE
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }

    //with this for loop we can understand that asynchronus code is better than blocking code
    res.end("About Page");
  }
  res.end("Error Page");
});

//listen is an asynchronous function
server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
