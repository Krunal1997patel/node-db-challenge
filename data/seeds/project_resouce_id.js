
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('project_resouce_id').insert([
       {project_id: 1, resouce_id: 1},
       {project_id: 2, resouce_id: 2}
      ]);
    // });
};