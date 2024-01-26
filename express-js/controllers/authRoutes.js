const express = require("express");
const router = express.Router();
const { login } = require("./authController"); // Import the controller

router.post("/", login); // Use the controller function for the route

module.exports = router;
