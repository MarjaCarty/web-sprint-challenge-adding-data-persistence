// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");

const router = express.Router();

const validateProject = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ message: "missing project data" });
  } else {
    next();
  }
};

router.get("/", async (req, res) => {
  try {
    const projects = await Project.getProjects();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", validateProject, async (req, res) => {
  try {
    const newProject = await Project.createProject(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
