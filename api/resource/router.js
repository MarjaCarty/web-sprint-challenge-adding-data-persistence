// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

const validateResource = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ message: "missing resource data" });
  } else {
    next();
  }
};

router.get("/", async (req, res) => {
  try {
    const resources = await Resource.getResources();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", validateResource, async (req, res) => {
  try {
    const newResource = await Resource.createResource(req.body);
    res.status(201).json(newResource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
