//Update the name of the controller below and rename the file.
const index = require( "../controllers/index.js" )
const users = require( "../controllers/users.js" )
const trips = require( "../controllers/trips.js" )

module.exports = function ( app ) {

    app.get( '/', index.view );

    app.post( '/users/add', users.addUser );

    app.get( '/trips', trips.view )

}