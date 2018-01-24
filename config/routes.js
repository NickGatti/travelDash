//Update the name of the controller below and rename the file.
const main = require("../controllers/main.js")
const trips = require("../controllers/trips.js")
module.exports = function(app){

  app.get('/', main.index);

  app.post('/newuser', main.create)

  app.get('/trips', trips.index )

  // app.post('/booknewtrip', trips.newBooking)
}
