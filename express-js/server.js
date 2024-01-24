const express = require("express");
let { people } = require("./data");
const app = express();

const PORT = 8080;

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(PORT, () => console.log(`\n Server is running on port ${PORT} 🔥`));
