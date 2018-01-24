const knex = require( "../db/knex.js" );

module.exports = {
    addFlight: function ( req, res ) {
        knex( 'flight' ).insert( {
            start: req.body.start,
            destination: req.body.destination,
            airline_id: req.session.user.airline_id
        } ).then( () => {
            res.redirect( '/airline' );
        } )
    }
}