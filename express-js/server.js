const express = require("express");
const people = require("./controllers/peopleRoutes");
const auth = require("./controllers/authRoutes");

const app = express();
const PORT = 8080;

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(PORT, () => console.log(`\nServer is running on port ${PORT} 🔥`));
