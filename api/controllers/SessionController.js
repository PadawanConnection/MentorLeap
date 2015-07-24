/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
  var bcrypt=require('bcrypt');

module.exports = {
	'new': function(req, res){
    // var oldDateObj = new Date();
    // var newDateObj = new Date(oldDateObj.getTime()+3600000);
    // req.session.cookie.expires = newDateObj;
    // req.session.authenticated = true;
    res.view('/session/new');
   },
   
   create: function(req,res){
    //is the form filled out
    if(!req.param('username') || !req.param('password')){
      var userpasserror =[{name:'userpassrequired',message:'You must have a username & password'}];
      req.session.flash={
        err:userpasserror
      };
      res.redirect('/session/new');
      return;
    }
    //see if the user is one of ours
    User.findOneByUsername(req.param('username'), function foundUser(err, user){
      if (err) return next(err);
      if (!user){
        var usernotfound =[{name:'usernothere',message:'This User does not exist'}];
          req.session.flash={
          err:usernotfound
        };
        res.redirect('/session/new');
        return;
      }
    });  
    //check password's correctness if user is found
    bcrypt.compare(req.param('password'),user.password,function(err,valid){
      if (err) return next(err);
      if (!valid){
        var wrongpass =[{name:'wrongpassword',message:'This is not the correct password'}];
        req.session.flash={
          err:wrongpass
        };
        res.redirect('/session/new');
        return;
      }
      req.session.authenticated = true;
      req.session.User = user;
      res.redirect('/user/show'+user.id);
    });
 },

 destroy: function(req, res, next){
  req.session.destroy();
  res.redirect('/session/new');
 },

 _config: {}
};

