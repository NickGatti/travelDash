const knex = require( "../db/knex.js" );

module.exports = {

    view: function ( req, res ) {
        res.render( 'trips' );
    },
}