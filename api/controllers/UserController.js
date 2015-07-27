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

   create: function (req,res, next){
    User.create( req.params.all(), function userCreated (err,user){
      if(err){
        console.log(err);
        // have to notify the user somehow
        }
      user.loggedIn = 1;
      user.save(function (err) {
        if (err) res.view('home/index', { error: 'error creating user', user: false });

        User.publishUpdate(user.id, { id: user.id, username: user.username, loggedIn: 1 });
        req.session.user = user;
        return res.view('user/userDash.ejs', { user: user, error: false });
      });
    });
   },
   index: function(req,res,next){ 
    User.find(function foundUsers(err, users){
      if (err) return next(err);
      return res.view('user/index',{
        users: users  //array of users sent as obj
      });
    });
  },
  _config: {}
};
