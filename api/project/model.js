// build your `Project` model here
const db = require("../../data/db-config");

module.exports = {
  getProjects() {
    return db("projects");
  },
  createProject(project) {
    create(project) {
      return db("projects")
        .insert(project)
        .then(([id]) => {
          return db("projects").where("project_id", id).first();
        })
    },
  },
};
