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

    addTrip: function ( req, res ) {
        knex( 'flight' )
            .where( 'id', req.body.flight )
            .then( ( flightData ) => {
                knex( 'trips' )
                    .insert( { user_id: req.session.user.id, title: `Flight number: ${flightData[0].id}`, description: `Flight from: ${flightData[0].start} to: ${flightData[0].destination}`, flight_id: flightData[ 0 ].id } )
                    .then( () => {
                        res.redirect( '../trips' );
                    } )
            } )
    },
}