exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'flight' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'flight' ).insert( [
                { start: '1pm @ Area 1', destination: 'Area 2', airline_id: 1 },
                { start: '1pm @ Area 3', destination: 'Area 4', airline_id: 2 },
                { start: '1pm @ Area 5', destination: 'Area 6', airline_id: 3 },
                { start: '1pm @ Area 7', destination: 'Area 8', airline_id: 4 },
                { start: '1pm @ Area 9', destination: 'Area 10', airline_id: 5 },
      ] );
        } );
};