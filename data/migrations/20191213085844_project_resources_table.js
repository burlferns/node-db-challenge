
exports.up = function(knex) {
  return knex.schema.createTable('project_resources',tbl=>{
    // Foreign Key
    tbl.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE") // Possible SQL settings: CASCADE, RESTRICT, DO NOTHING, SET NULL
      .onUpdate("CASCADE");

    // Foreign Key
    tbl.integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onDelete("CASCADE") // Possible SQL settings: CASCADE, RESTRICT, DO NOTHING, SET NULL
      .onUpdate("CASCADE");

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources');
};
