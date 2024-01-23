const express = require("express");

const app = express();

const PORT = 8080;

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log(method, url, time);
  //   res.send("Testing");
  next(); //when using middleware, we must call next() to move to the next middleware
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(PORT, () => console.log(`\nServer running on port ${PORT} 🔥`));
