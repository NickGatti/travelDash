const knex = require( "../db/knex.js" );

module.exports = {

    addUser: function ( req, res ) {
        knex( 'users' ).where( { email: req.body.email, password: req.body.password } ).then( ( loggedIn ) => {
            if ( !loggedIn[ 0 ] ) {
                console.log( 'Not Logged In' );
                knex( 'users' )
                    .insert( { name: req.body.name, email: req.body.email, password: req.body.password } )
                    .then( () => {
                        req.session.user.name = req.body.name
                        req.session.user.email = req.body.email
                        res.render( 'trips', {
                            user: req.session.user
                        } );
                    } )
            } else {
                console.log( 'Logged In' );
                req.session.user.name = loggedIn[ 0 ].name
                req.session.user.email = loggedIn[ 0 ].email
                res.render( 'trips', {
                    user: req.session.user
                } );
            }
        } ).catch( ( err ) => {
            console.log( err );
            res.sendStatus( 500 )
        } )
    }

}