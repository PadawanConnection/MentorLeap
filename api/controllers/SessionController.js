/**
 * SessionsController
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
var bcrypt = require('bcrypt');

module.exports = {

  'new': function(req,res){
    res.view('session/new');
    req.session.authenticated =true;
  },

  create: function(req,res,next){
     if (!req.param('username') || !req.param('password')){
      var usernamePasswordError = [{name:'usernamePasswordRequired', message:'You must enter a username and password '}];
      req.session.flash={
        err: usernamePasswordError
      };
      res.redirect('/session/new');
      return; 
     }
     
     User.findOneByUsername(req.param('username'), function foundUser(err,user){
      if (err) next(err);
      if (!user){
        var noAccountError = [{name:'noAccountFound', message:'This account does not exist'}];
        req.session.flash={
          err:noAccountError
        };
        res.redirect('/session/new');
        return;
        }
       bcrypt.compare(req.param('password'),user.password,function(err,valid){
        if (err) next(err);
        if(!valid) {

          //this does not work - well it does, if the password is incorrect it won't leave the modal
          var passwordMismatch = [{name:'incorrectPassword', message:'This is not the right password'}];
          req.session.flash={
            err:passwordMismatch
          };
          return;
        }
       req.session.authenticated =true;
       req.session.User=user;
       res.redirect('/user/show/'+user.id);
      });
  });
 },
  



  _config: {}


};
