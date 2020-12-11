// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
  getTasks() {
    return db("tasks as t").join("projects as p", "t.project_id", "p.id");
    // .select(
    //   "p.name as project_name",
    //   "p.description as project_description",
    //   "t.description"
    // );
  },
  createTask(task) {
    return db("tasks")
      .insert(task, "id")
      .then((id) => {
        return db("tasks")
          .where("id", id)
          .first()
          .then((res) => {
            return { ...res, completed: res.completed ? true : false };
          });
      });
  },
};
