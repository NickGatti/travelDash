
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airline').del()
    .then(function () {
      // Inserts seed entries
      return knex('airline').insert([
        {name: 'US Airways', description: 'U.S. based airline company'},
        {name: 'Best airline ever', description: 'The best airline company to have ever existed'}
      ]);
    });
};
