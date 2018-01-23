//Update the name of the controller below and rename the file.
const index = require( "../controllers/index.js" )

module.exports = function ( app ) {

    app.get( '/', index.view );

}