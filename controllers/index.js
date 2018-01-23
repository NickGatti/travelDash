const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res ) {
        if ( !req.session.user ) {
            console.log( 'No session' );
            req.session.user = {}
            req.session.save( function () {
                res.render( 'index', {
                    password: true
                } );
            } )
        } else {
            res.render( 'index', {
                password: true
            } );
        }
    },
}