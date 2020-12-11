// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
  getResources() {
    return db("resources");
  },
  createResource(resource) {
    return db("resources")
      .insert(resource)
      .then(([id]) => {
        return db("resources").where("id", id).first();
      });
  },
};
