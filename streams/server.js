// const { createReadStream } = require("fs");

// const stream = createReadStream("./modules/built-in-modules/content/big.txt", {
//   highWaterMark: 90000,
//   encoding: "utf8",

//   //default is 64kb
//   //last buffer - remainder
//   //highWaterMark - control size
// });

var http = require("http");

var fs = require("fs");

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream(
      "./modules/built-in-modules/content/big.txt",
      "utf8"
    );
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
