const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1> <a href=api/products>Products</a>");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
