exports.up = function(knex) {
    return knex.schema.createTable('task', table => {
        table.increments();
  
        table.string('description', 300).notNullable();
  
        table.text('note');
  
        table.boolean('completed').defaultTo(false);
  
        table.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('project')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('task')
  };