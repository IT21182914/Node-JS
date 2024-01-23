const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");

const app = express();

const PORT = 8080;

app.use([logger, authorize]); //this mean that every request will go through the logger middleware.app is using the logger middleware

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  //   res.send({ user: req.user, message: "Items" });
  console.log(req.user);
  res.send("Items");
});

app.listen(PORT, () => console.log(`\nServer running on port ${PORT} 🔥`));
