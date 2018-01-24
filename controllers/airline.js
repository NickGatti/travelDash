const knex = require( "../db/knex.js" );

module.exports = {

    addAirline: function ( req, res ) {
        res.render( 'airlineAdd' );
    },

    airlineLoginSelect: function ( req, res ) {
        knex( 'airline' )
            .then( ( airlineData ) => {
                res.render( 'airlineLogin', {
                    airlines: airlineData
                } );
            } )
    },

    airlineLogin: function ( req, res ) {

        if ( sendNoLogin( req, res ) ) {
            req.session.user.airline_id = req.body.airline
            res.redirect( '/airline' );
        }
    },

    airlineView: function ( req, res ) {
        sendNoLogin( req, res )
        knex( 'airline' )
            .where( 'id', req.session.user.airline_id )
            .then( ( airlineData ) => {
                knex( 'flight' )
                    .where( 'id', airlineData[ 0 ].id )
                    .then( ( flightData ) => {
                        res.render( 'airlineView', {
                            user: req.session.user,
                            airline: airlineData[ 0 ],
                            flights: flightData
                        } );
                    } )
            } )
    }
}

function sendNoLogin( req, res ) {
    if ( !req.session.user ) {
        console.log( 'No session on login check' );
        res.render( 'index', {
            password: "NOLOGIN"
        } );
        return false
    }
    return true
}