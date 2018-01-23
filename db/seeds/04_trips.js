
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {user_id: 1, title: 'vacation', description: '2 week vacation', flight_id: 1},
        {user_id: 2, title: 'work trip', description: 'east coast work trip', flight_id: 2}
      ]);
    });
};
