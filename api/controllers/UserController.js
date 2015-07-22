/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  // this should point to the login modal - which should be referenced as /user/new
  // we should overwrite main and move the functionality over here for user...
  // 'new': function (req,res){
  //   res.view();
  //   req.session.flash ={};
  // }, 

  // create: function (req,res, next){
  //   User.create( req.params.all(), function userCreated (err,user){
  //     if(err){
  //       console.log(err);
  //       // have to notify the user somehow
  //       }
  //       return res.redirect('user/new');
  //     res.json(user);
  //   });
  // },

  // we should have the update page show more detailed data

  _config: {},
};
