const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res ) {

        knex( 'flight' )
            .select( 'flight.id', 'flight.start', 'flight.destination', 'flight.created_at', 'flight.updated_at', 'airline.name AS airline_name' )
            .join( 'airline', 'flight.airline_id', 'airline.id' )
            .then( ( flightData ) => {
                res.render( 'trips', {
                    user: req.session.user,
                    flights: flightData,
                    trips: req.session.user.trips
                } );
            } )
    },
}