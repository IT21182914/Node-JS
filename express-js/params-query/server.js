const express = require("express");
const { products } = require("./basic-json/data");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1> <a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  //this id datatype is string by default
  const productId = parseInt(req.params.id); //parseInt() converts string to integer
  const singleProduct = products.find((product) => product.id === productId);

  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/api/products/:id/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello world");
});

app.get("/api/v1/query", (req, res) => {
  //http://localhost:8080/api/v1/query?search=al&limit=2
  //   console.log(req.query)

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
