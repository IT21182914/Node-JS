const express = require("express");
const logger = require("./logger");

const app = express();

const PORT = 8080;

app.use(logger); //this mean that every request will go through the logger middleware.app is using the logger middleware

// app.use("/api", logger); only the routes that start with /api will go through the logger middleware

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
  res.send("Items");
});

app.listen(PORT, () => console.log(`\nServer running on port ${PORT} 🔥`));
