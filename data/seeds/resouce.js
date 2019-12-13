

exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('resouce').insert([
        {name:'metal', description: 'perfect for builing someing big'},
        {name:'fuel', description: 'to power someting big'},
        {name:'soild', description: 'to grow someting'}
      ]);
    // });
};
