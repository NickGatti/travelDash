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
        res.render('trips', {trips:results, user:req.session.user});
      })

  },
  // newBooking: function (req, res) {
  //
  // }


}
