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
      .insert(project)
      .then(([id]) => {
        return db("projects");
      });
  },
};
