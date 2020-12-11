// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  getProjects() {
    return db("projects").then((res) =>
      res.map((item) => {
        return { ...item, completed: item.completed ? true : false };
      })
    );
  },
  createProject(project) {
    return db("projects")
      .insert(project, "id")
      .then((id) => {
        return db("projects")
          .where("id", id)
          .first()
          .then((res) => {
            return { ...res, completed: res.completed ? true : false };
          });
      });
  },
};
