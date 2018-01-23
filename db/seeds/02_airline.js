exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'airline' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'airline' ).insert( [
                { name: 'Airline 1', description: 'The first airline' },
                { name: 'Airline 2', description: 'The second airline' },
                { name: 'Airline 3', description: 'The third airline' },
                { name: 'Airline 4', description: 'The fourth airline' },
                { name: 'Airline 5', description: 'The fifth airline' },
      ] );
        } );
};