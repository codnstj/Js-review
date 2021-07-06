const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  name:{
    type:String,
    allowNull : false
  },
  email:{
    type:String,
    allowNull : false
  }

})