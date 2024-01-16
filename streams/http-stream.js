var http = require("http");

var fs = require("fs");

http
  .createServer(function (req, res) {
    const text = fs.readFileSync(
      "./modules/built-in-modules/content/big.txt",
      "utf8"
    );
    res.end(text);
  })
  .listen(5000);
