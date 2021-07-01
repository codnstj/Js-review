const mongoose = require('mongoose') //몽구스 모듈 가져오기
const bcrypt = require('bcrypt')
const saltRounds = 10 //salt 가 몇글자인지 
const jwt = require('jsonwebtoken')//jsonwebtoken 라이브러리 생성


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
    minlength:5
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

userSchema.pre('save',function(next){
  var user = this;
  if(user.isModified('password')){
    //비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds,function(err,salt){
      if(err) return next(err)  //오류처리
  
      bcrypt.hash( user.password , salt, function(err,hash){
        if(err) return next(err)  //오류처리
        user.password = hash
        next()
      })
    })
  }else {
    next()
  }
})

  userSchema.methods.comparePassword = function(plainPassword,cb ){

    //plainPassword 1234567  == 암호화된 비밀번호 : ~~
      bcrypt.compare(plainPassword,this.password, function(err,isMatch) {
        if(err) return cb(err); //오류처리
        cb(null,isMatch)
      })
  }

  userSchema.methods.generateToken = function(cb){
    var user = this;
    
    //jsonwebtoken 을 이용해서 웹 토큰 생성하기
    var token = jwt.sign(user._id.toHexString(),'secretToken')


    user.token = token
    user.save(function(err,user){
      if(err) return cb(err) //오류처리
      cb(null,user)
    })
    
  }

  userSchema.statics.findByToken = function(token,cb){
    var user = this;
    
    //user._id + '' = tocken
    //토큰을 decode 한다.
    jwt.verify(token,'secretToken',function(err,decode){
      //유저 아이디를 이용햇서 유저를 찾은 다음에 
      //클라이엉ㄴ트에서 가져온 token 과 DB 에 보관된 토큰이 일치 하는지 확인

      user.findOne({"_id":decoded,"token":tocken},function(err,user){
        if(err) return cb(err);
        cb(nill,user)
      })
    })

  }

const User = mongoose.model('User',userSchema) //스키마를 모델로 감싸준다.

module.exports = { User } //다른곳에서 접근 가능하도록 exports 해준다.

