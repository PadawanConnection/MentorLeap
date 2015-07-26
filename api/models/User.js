/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');


module.exports = {
  
  schema:true,

  attributes: {

  	username: {
      type: 'string',
      max: 16,
      unique: true,
      required: true
    },  
    mentor: {
      type: 'boolean',
      defaultsTo: false,
    },
    name:{
        first:{
          type:'string',
        },
        last:{
          type:'string',
        }
    },
    password: {
      type: 'string',
      required: true
    },
    encryptedPassword:{
      type:'string'
    },
    google:{
      type:'string'
    },
    loggedIn: {
      type: 'boolean',
      defaultsTo: 0,
      required: true
    },
     email:{
      type: 'string',
      // required:true, not until we have the form created
      unique:true
    },
     bio:{
      type:'string'
     },
     workHistory:{
      type:'string'
     },
     jobTitle:{
      type:'string'
     },
     years:{
      type:'integer'
     },
     summary:{
      type:'string'
     },
     // what type of mentor is the mentor?  
     expertise:{     
      type:'string'
     },
     videoid:{
      type:'string'
     }

  },
  
  beforeCreate: function (values, next) {

    var salt = bcrypt.genSaltSync(10);

    bcrypt.hash(values.password, salt, function (err, hash) {
      if (err) return next(err);
      values.password = hash;
      next();
    });

  },

  // so the client will never see what's in user creation
  toJSON: function(){
    var obj = this.toObject();
    delete obj.password;
    delete obj.passwordConfirm;
    delete obj.encryptedPassword;
    return obj;
   }
  

};
