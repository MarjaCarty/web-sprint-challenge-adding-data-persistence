// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = await Task.createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
