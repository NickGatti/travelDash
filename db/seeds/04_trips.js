exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'trips' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'trips' ).insert( [
                { title: 'Area 1 to Area 2', description: 'Travel Nice', user_id: 1, flight_id: 1 },
                { title: 'Area 3 to Area 4', description: 'Travel Nice', user_id: 2, flight_id: 2 },
                { title: 'Area 5 to Area 6', description: 'Travel Nice', user_id: 3, flight_id: 3 },
                { title: 'Area 7 to Area 8', description: 'Travel Nice', user_id: 4, flight_id: 4 },
                { title: 'Area 9 to Area 10', description: 'Travel Nice', user_id: 5, flight_id: 5 },
      ] );
        } );
};