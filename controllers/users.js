const knex = require( "../db/knex.js" );

module.exports = {

    addUser: function ( req, res ) {
        knex( 'users' ).where( { email: req.body.email } ).then( ( foundEmail ) => {
            if ( foundEmail[ 0 ] ) {
                if ( foundEmail[ 0 ].email && foundEmail[ 0 ].password && foundEmail[ 0 ].name ) {
                    if ( req.body.password === foundEmail[ 0 ].password ) {
                        console.log( 'Logged in', foundEmail[ 0 ].email );
                        knex( 'trips' )
                            .join( 'users', 'trips.user_id', 'users.id' )
                            .where( 'users.email', foundEmail[ 0 ].email ).then( ( tripsData ) => {
                                if ( !req.session.user ) {
                                    console.log( 'No session' );
                                    req.session.save( function () {
                                        req.session.user = {}
                                        req.session.user.id = foundEmail[ 0 ].id
                                        req.session.user.name = foundEmail[ 0 ].name
                                        req.session.user.email = foundEmail[ 0 ].email
                                        req.session.user.trips = tripsData.sort( function ( a, b ) {
                                            return a.flight_id - b.flight_id
                                        } )
                                        res.redirect( '/trips' );
                                    } )
                                } else {
                                    console.log( 'Session found' );
                                    req.session.user.id = foundEmail[ 0 ].id
                                    req.session.user.name = foundEmail[ 0 ].name
                                    req.session.user.email = foundEmail[ 0 ].email
                                    req.session.user.trips = tripsData.sort( function ( a, b ) {
                                        return a.flight_id - b.flight_id
                                    } )
                                    res.redirect( '/trips' );
                                }
                            } )
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
                    .insert( { name: req.body.name, email: req.body.email, password: req.body.password }, '*' )
                    .then( ( user ) => {
                        req.session.user = user[ 0 ];
                        res.redirect( '/trips' );
                    } )
            }
        } )
    }
}