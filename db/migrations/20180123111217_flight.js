
exports.up = function(knex, Promise) {
  return knex.schema.createTable('flight', function(table){
      table.increments();
      table.string('start');
      table.string('destination');
      table.integer('airline_id')
            .references('id')
            .inTable('airline')
            .onDelete('CASCADE')
            .index();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flight')
};
