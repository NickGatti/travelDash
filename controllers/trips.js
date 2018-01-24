const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res ) {

        knex( 'flight' )
            .select( 'flight.id', 'flight.start', 'flight.destination', 'flight.created_at', 'flight.updated_at', 'airline.name AS airline_name' )
            .join( 'airline', 'flight.airline_id', 'airline.id' )
            .then( ( flightData ) => {
                knex( 'trips' )
                    .join( 'users', 'trips.user_id', 'users.id' )
                    .where( 'users.email', req.session.user.email ).then( ( tripsData ) => {
                        req.session.user.trips = tripsData.sort( function ( a, b ) {
                            return a.flight_id - b.flight_id
                        } )

                        res.render( 'trips', {
                            user: req.session.user,
                            flights: flightData,
                            trips: req.session.user.trips
                        } );
                    } )
            } )
    },

    addTrip: function ( req, res ) {
        knex( 'flight' )
            .where( 'id', req.body.flight )
            .then( ( flightData ) => {
                knex( 'airline' ).where( 'id', flightData[ 0 ].airline_id ).then( ( airlineData ) => {
                    knex( 'trips' )
                        .insert( { user_id: req.session.user.id, title: `${flightData[0].start} to ${flightData[0].destination}`, description: `${flightData[0].start} to: ${flightData[0].destination} Airline: ${airlineData[0].name} - ${airlineData[0].description}`, flight_id: flightData[ 0 ].id } )
                        .then( () => {
                            res.redirect( '/trips' );
                        } )
                } )
            } )
    },
}