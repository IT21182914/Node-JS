const express = require("express");
let { people } = require("./data");
const app = express();

const PORT = 8080;

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false })); //urlencoded is a method in express that parses the form data and adds it to the body property of the request object

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// parse form data
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
  res.send("post");
});

app.listen(PORT, () => console.log(`\n Server is running on port ${PORT} 🔥`));
