// build your `Resource` model here
const db = require("../../data/db-config");

module.exports = {
  getResources() {
    return db("resources");
  },
  createResource(resource) {
    create(resource) {
      return db("resources")
        .insert(resource)
        .then(([id]) => {
          return db("resources").where("resource_id", id).first();
        })
    },
  },
};
