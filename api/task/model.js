// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
  getTasks() {
    return db("tasks as t")
      .join("projects as p", "t.project_id", "p.project_id")
      .select("p.project_name", "p.project_description", "task_description");
  },
  createTask(task) {
    return db("tasks")
      .insert(task)
      .then(([id]) => {
        return db("tasks").where("task_id", id).first();
      });
  },
};
