
exports.up = function(knex) {
    return knex.schema.createTable('project_resouce_id', table => {
        table.increments();

        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        table.integer('resouce_id')
             .unsigned()
             .notNullable()
             .references('id')
             .inTable('resouce')
             .onDelete('CASCADE')
             .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('project_resouce_id')
};
