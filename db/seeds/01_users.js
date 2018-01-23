exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'users' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'users' ).insert( [
                { name: 'Traveler 1', email: 'traveler1@travel.com', password: 'flyme' },
                { name: 'Traveler 2', email: 'traveler2@travel.com', password: 'flyme' },
                { name: 'Traveler 3', email: 'traveler3@travel.com', password: 'flyme' },
                { name: 'Traveler 4', email: 'traveler4@travel.com', password: 'flyme' },
                { name: 'Traveler 5', email: 'traveler5@travel.com', password: 'flyme' },
      ] );
        } );
};