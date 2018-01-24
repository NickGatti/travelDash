exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'users' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'users' ).insert( [
                { name: 'Traveler 1', email: 'traveler1@travel.com', password: 'flyme' },
      ] );
        } );
};