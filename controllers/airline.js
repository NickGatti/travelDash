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
        res.render( 'airlineView', {
            user: req.session.user
        } );
    }

}