exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('project').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('project').insert([
       { name: 'build rocket', description: 'rock that will reach sun', completed: false},
       { name: 'make earth greener', description: 'Make earth look health', completed: true}
      ]);
    // });
};
