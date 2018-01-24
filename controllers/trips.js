const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    knex('trips')
    .join('flight', 'trips.flight_id', 'flight.id')
      .where('trips.user_id', req.session.user.id)
      .then((results)=>{
        knex('users')
        .where('id', req.session.user.id)
        .then((user)=>{
          knex('flight')
          .then((flightData)=>{

            res.render('trips', {trips:results, user:req.session.user, flight:flightData});
          })
      })
})
  },
  newBooking: function (req, res) {
    knex('trips')
    .insert({
      title:req.body.title,
      description:req.body.description,
      flight_id:req.body.flight_id,
      user_id: req.session.user.id
    })
    // .where(req.body.user.id, req.session.user.id)
    .then((newTrip)=>{
      res.redirect('/trips')
    })



  }

}
