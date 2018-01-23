const knex = require( "../db/knex.js" );

module.exports = {

    addUser: function ( req, res ) {
        knex( 'users' )
            .insert( { name: req.body.name, email: req.body.email, password: req.body.password } )
            .then( () => {
                res.redirect( '../trips' );
            } )
    }

}