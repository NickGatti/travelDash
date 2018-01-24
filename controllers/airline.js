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
        req.session.user.airline_id = req.body.airline
        res.redirect( '../airline' );
    },

    airlineView: function ( req, res ) {

        if ( !req.session.user.airline_id ) {
            res.render( 'index', {
                password: "NOLOGIN"
            } );
        }

        knex( 'airline' )
            .where( 'id', req.session.user.airline_id )
            .then( ( airlineData ) => {

                if ( !req.session.user.id || !req.session.user.name || !req.session.user.email ) {
                    res.render( 'index', {
                        password: "NOLOGIN"
                    } );
                } else {
                    res.render( 'airlineView', {
                        user: req.session.user,
                        airline: airlineData[ 0 ]
                    } );
                }
            } )
    }

}