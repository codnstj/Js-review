const cookieParser = require("cookie-parser")
const {User}=require('../models/User')
let autn = (req,res,next) =>{
  //인증처리 를 하는곳

  //클라이언트 쿠키에서 토큰을 가져온다.
  let token = req.cookies.x_auth;
  //토큰을 목호화 한후 유저를 찾는다.
    User.findbyToken(token,(err,user)=>{
      if(err)throw err;
      if(!user) return res.json({isAuth : false , error : true})

      req.token = token;
      req.user = user;
      next();
    })
  //유저가 있으면 인증 okay
  
  //유저가 없으면 인증 NO!
}

module.exports = {auth}