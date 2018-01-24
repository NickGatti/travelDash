//Update the name of the controller below and rename the file.
const index = require( "../controllers/index.js" )
const users = require( "../controllers/users.js" )
const trips = require( "../controllers/trips.js" )
const airline = require( "../controllers/airline.js" )

module.exports = function ( app ) {

    app.get( '/', index.view );

    app.post( '/users/add', users.addUser );

    app.get( '/trips', trips.view )

    app.post( '/trips/add', trips.addTrip )

    app.get( '/airline/login', airline.airlineLoginSelect )

    app.post( '/airline/panel/login', airline.airlineLogin )

    app.get( '/airline', airline.airlineView )

    app.get( '/airline/new', airline.newAirline )

    app.post( '/airline/add', airline.addAirline )

}