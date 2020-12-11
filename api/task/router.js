// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");

const router = express.Router();

const validateTask = (req, res, next) => {
  if (!req.body.description) {
    res.status(400).json({ message: "missing task data" });
  } else {
    next();
  }
};

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", validateTask, async (req, res) => {
  try {
    const newTask = await Task.createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
