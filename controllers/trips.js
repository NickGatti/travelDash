const knex = require("../db/knex.js");

// module.exports = {
//   index: function(req, res) {
//     res.render('trips');
//   },
//
// }

module.exports = {
  index: function(req, res) {
    knex('trips')
      .then((results)=>{
        knex('flight')
          .then((flightData)=>{

            res.render('trips', {trips:results, user:req.session.user, flight:flightData});
          })
      })

  },
  // newBooking: function (req, res) {
  //   knex('trips')


  }
