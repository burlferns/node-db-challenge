
exports.up = function(knex) {
  return knex.schema.createTable('tasks',tbl=>{
    tbl.increments();

    tbl.string('description',255)
      .notNullable();

    tbl.string('notes',255);   

    tbl.boolean('completed')
      .defaultTo(false)
      .notNullable();

    // Foreign Key
    tbl.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE") // Possible SQL settings: CASCADE, RESTRICT, DO NOTHING, SET NULL
      .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
