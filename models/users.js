const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    email:{
      type:String,
      required: true,
      unique: true,
    },
    Name:{
      type:String,
      required: true
    },
    Password: {
      type:String,
      required: true
    }

});

module.exports= mongoose.model('userids',UserSchema);
