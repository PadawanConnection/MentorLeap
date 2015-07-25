/**
 * MainController
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
    main: function (req, res) {
     //   res.view('user/youtubeUpload.ejs');
     // },



    if (req.session.user) {
      User.findOne(req.session.user.id, function (err, user) {
        if (err) {
          res.view('home/index.ejs', { error: 'Error logging in' });
        } else {
          if (user) {
            res.view('/video/:id', { user: user, id: user.id, error: false });
          } else {
            res.view('home/index.ejs', { user: false, error: 'Error finding user' });
          }
        }
      });
    }
  },

  addVideo: function (req, res) {

    User.findOne(req.session.user.id, function (err, user, next) {
      if (err) {
        res.view('home/index', { user: false, error: 'Error finding user.' });
        console.log(error);
      }
      else {
        if (user) {
          User.update(req.param('id'),req.params('videoId'),function userUpdated(err){
            if(err){
              res.redirect('/video'+req.param('id'),{user: false, error: 'Video not uploaded'});
              console.log(error);
            } else {
              res.redirect('/profile/'+req.param('id'));
            }
          })
        }
      }
    })
  },    

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MainController)
   */
  _config: {}


};
