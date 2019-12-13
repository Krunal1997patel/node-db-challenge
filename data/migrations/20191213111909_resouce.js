
exports.up = function(knex) {
    return knex.schema.createTable('resouce', table => {
        table.increments();

        table.string('name', 100).notNullable();

        table.string('description', 300);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resouce')
};
