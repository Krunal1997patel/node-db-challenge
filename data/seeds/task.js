
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('task').insert([
       {description: 'read a rocket book', note: 'dame this is hard', completed: false, project_id: 3 },
       {description: 'plants tree as much as you can', note: 'seed is too expensive', completed: true, project_id: 4 }
      ]);
    // });
};
