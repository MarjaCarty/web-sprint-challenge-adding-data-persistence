// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
