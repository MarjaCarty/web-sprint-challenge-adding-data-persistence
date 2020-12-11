exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description");
      tbl.boolean("completed").notNullable().defaultTo(0);
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
      tbl.string("description");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").notNullable().defaultTo(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("projects_resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
