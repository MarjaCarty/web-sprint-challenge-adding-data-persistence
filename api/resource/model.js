// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
  getResources() {
    return db("resources").then((res) =>
      res.map((item) => {
        return { ...item, completed: item.completed ? true : false };
      })
    );
  },
  createResource(resource) {
    return db("resources")
      .insert(resource)
      .then(([id]) => {
        return db("resources").where("id", id).first();
      });
  },
};
