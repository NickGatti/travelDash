const knex = require("../db/knex.js");

// module.exports = {
//   index: function(req, res) {
//     res.send("Hello");
//   },
// }

// #1-As a user
// When I go to the root route '/'
// Then I see a form to enter a new user
module.exports = {
  index: function(req, res) {
    res.render('index');
  },

  // #2-As a user
  // When I enter information into the form and submit
  // I'm redirected to `/trips`
  create: function (req, res) {
    knex('users')
    .insert(req.body, '*')
    .then((user)=>{
      req.session.user = user[0];
      req.session.save(()=>{
        res.redirect('/trips')
      })
    })


  }
}
