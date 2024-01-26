const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("./peopleController"); // Import the controller

router.get("/", getPeople); // Use the controller function for the route

router.post("/", createPerson);

router.post("/postman", createPersonPostman);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

// router.route("/").get(getPeople).post(createPerson);
// router.route("/postman").post(createPersonPostman);
// router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
