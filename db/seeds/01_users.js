
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {name: 'Carlos', email: 'Carlos@galvanize.com', password: 'test'},
        {name: 'Nick', email: 'nick@mail.com', password: 'Donny'}
      ]);
    });
};
