const knex = require( "../db/knex.js" );

module.exports = {

    addUser: function ( req, res ) {
        knex( 'users' ).where( { email: req.body.email } ).then( ( foundEmail ) => {
            if ( foundEmail[ 0 ] ) {
                if ( foundEmail[ 0 ].email && foundEmail[ 0 ].password && foundEmail[ 0 ].name ) {
                    if ( req.body.password === foundEmail[ 0 ].password ) {
                        console.log( 'Logged in' );
                        req.session.user.name = foundEmail[ 0 ].name
                        req.session.user.email = foundEmail[ 0 ].email
                        res.redirect( '../trips' );
                    } else {
                        console.log( 'Wrong password' );
                        res.render( 'index', {
                            password: false
                        } );
                    }
                }
            } else {
                console.log( 'No user' );
                knex( 'users' )
                    .insert( { name: req.body.name, email: req.body.email, password: req.body.password } )
                    .then( () => {
                        req.session.user.name = req.body.name
                        req.session.user.email = req.body.email
                        res.redirect( '../trips' );
                    } )
            }
        } )
    }
}