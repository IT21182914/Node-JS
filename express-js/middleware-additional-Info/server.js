const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan"); //third party middleware for logging. it will log the request in the console with the status code and the time taken to complete the request. npm i morgan

const app = express();

const PORT = 8080;

// app.use([logger, authorize]);
//this mean that every request will go through the logger middleware.app is using the logger middleware

// app.set("etag", false); //with this we can disable the etag header.so we can see the changes in the browser without clearing the cache. then we can get status code as 200 instead of 304

app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

//by doing this we can use the middleware only for the route we want
app.get("/api/items", [logger, authorize], (req, res) => {
  //   res.send({ user: req.user, message: "Items" });
  console.log(req.user);
  res.send("Items");
});

app.listen(PORT, () => console.log(`\nServer running on port ${PORT} 🔥`));
