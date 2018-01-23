const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res ) {
        if ( !req.session.user ) {
            req.session.user = {}
            req.session.save( function () {
                res.render( 'index' );
            } )
        } else {
            res.render( 'index' );
        }
    },
}