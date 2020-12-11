// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
  getTasks() {
    return db("tasks as t")
      .join("projects as p", "t.project_id", "p.id")
      .select("p.name", "p.description", "t.description");
  },
  createTask(task) {
    return db("tasks")
      .insert(task)
      .then(([id]) => {
        return db("tasks");
      });
  },
};
