
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flight').del()
    .then(function () {
      // Inserts seed entries
      return knex('flight').insert([
        {start: 'Phoenix,AZ', destination: 'Maui, HI', airline_id: 1},
        {start: 'Los Angeles, CA', destination: 'New York, NY', airline_id: 2}
      ]);
    });
};
