const mongoose = require('mongoose') //몽구스 모듈 가져오기

const userSchema = mongoose.Schema({  //스키마 생성
  name : {
    type:String,
    maxlength: 50
  },
  email:{
    type:String,
    trim:true,  //space 를 없에주는 공간
    unique:1
  },
  password:{
    type:String,
    mxinength:5
  },
  lastname:{
    type:String,
    maxlength:50
  },
  role:{
    type:Number,
    default:0
  },
  image:String,
  token:{
    type:String
  },
  tokenExp:{
    type:Number
  }
})

const User = mongoose.model('User',userSchema) //스키마를 모델로 감싸준다.

module.exports = { User } //다른곳에서 접근 가능하도록 exports 해준다.