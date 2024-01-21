const express = require("express");
const path = require("path");

const app = express();

const PORT = 8080;

// setup static and middleware
app.use(express.static("./public"));

/* 

**************

without below code, we can't access the html file in the public folder.............

***************
*/

// app.get("/", (req, res) => {
//   console.log("User hit the resource");
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
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
