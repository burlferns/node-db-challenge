
exports.up = function(knex) {
  return knex.schema.createTable('projects',tbl=>{
    tbl.increments();

    tbl.string('name',255)
      .notNullable();

    tbl.string('description',255);

    tbl.boolean('completed')
      .defaultTo(false)
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
