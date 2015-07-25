/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
  var bcrypt=require('bcrypt');

module.exports = {


  // 'new': function(req, res){
 //    // var oldDateObj = new Date();
 //    // var newDateObj = new Date(oldDateObj.getTime()+3600000);
 //    // req.session.cookie.expires = newDateObj;
 //    // req.session.authenticated = true;
 //    res.view('/index');
 //   },
   
  //  create: function(req,res){
  //   User.findOne(req.param('username'),function foundUser(err, user){
  //     if(err) return next(err);
  //     bcrypt.compare(req.param('password'),user.password,function(err,valid){
  //     if(err) return next(err);  
  //     req.session.authenticated = true;
  //     req.session.User = user;
  //     res.redirect('/user/show'+user.id);
  //     });
  //   });
  // },

 destroy: function(req, res, next){
  req.session.destroy();
  res.redirect('/');
 },

 _config: {}
};

