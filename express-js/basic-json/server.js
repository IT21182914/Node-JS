const express = require("express");
const path = require("path");
const { products } = require("./data");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`\nServer running on port ${PORT} 🔥`);
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
