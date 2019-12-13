
exports.up = function(knex) {
    return knex.schema.createTable('project', table => {
        table.increments();
  
        table.string('name', 100).notNullable()
  
        table.string('description', 300)
  
        table.boolean('completed').defaultTo(false)
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('project')
  };