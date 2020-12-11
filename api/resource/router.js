// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const resources = await Resource.getResources();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newResource = await Resource.createResource(req.body);
    res.status(201).json(newResource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
