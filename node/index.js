const express = require('express') //express 모듈 가져오기
const app = express() //express 함수를 이용해서 새로운 앱 만들기
const port = 5000 //포트는 3000 번을 백엔드 서버로써 사용
const config = require('./config/key'); //비밀정보를 가져올 파일 가져오기
const {User} = require("./models/User"); //user 스키마 가져오기
const bodyParser = require('body-parser'); //body-parser 모듈 가져오기
const cookieParser = require('cookie-parser');
const{auth} = require('./middleware/auth');

  //application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
//application/json
app.use(bodyParser.json()) 

const mongoose = require('mongoose');//몽구스 모듈 불러오기
const { json } = require('body-parser');//json 파일로 body-parser 불러오기
const { Router } = require('express'); //Router 를 익스프레스 에서 가져오기
mongoose.connect(config.mongoURI,{ // 몽구스 연결 
  useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false //연결옵션
}).then(()=> console.log('MongoDB Connected')) // 연결된다면 콘솔로그
  .catch(err => console.log(err)) // 연결되지않고 ERR 이 반환 된다면 err 콘솔로그



app.get('/',(req,res) => res.send('Hello World !!')) //웹서버가 "/"을 받았을때 HELLO WORLD 를 보낸다.

app.post('/api/user/register',(req,res) => {
  //회원 가입 할때 필요한 정보들을 client 에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
    
    const user = new User(req.body) //모든 정보를 모델에 넣어줌

    user.save((err,userInfo)=>{
      if(err) return res.json({ success:false, err}) //오류처리
      return res.status(200).json({
        success:true
      })
    })

})


app.post('/login',(req,res) => {
   console.log(JSON.stringify(req.body))
  //요청된 이메일 을 데이터베이스에서 있는지 찾는다.
  User.findOne({email:req.body.email},(err,user)=> {
    console.log(JSON.stringify(user))
    if(!user){ //오류처리
      return res.json({
        loginSuccess:false,
        message:"제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
    //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번혼지 확인

    user.comparePassword(req.body.password ,(err,isMatch) => {
      if(!isMatch){ //오류처리
        return res.json({loginSuccess : false,message : "비밀번호가 틀렸습니다."})
      }
            //비밀번호까지  맞다면 토큰을 생성하기. (JSONWEBTOKEN 설치)
      user.generateToken((err,user)=>{
        if(err) return res.status(400).send(err); //오류처리
        else{
          res.cookie("x_auth",user.token) //쿠키에 저장
            .status(200)
            .json({loginSuccess:true,userId:user._id})
        }
          //토큰을 저장한다. 어디에 ? 쿠키,로컬스토리지,
          
      })  
    })
  })
})


app.post('api/users/auth',auth,(req,res)=>{
    //여기까지 미들웨어를 통과해왔다는 얘기는 Authentication 이 true 라는 말
    res.status(200).json({
      _id:req.user._id,
      isAdmin:req.userrole === 0? false : true,
      email : req.user.email,
      lastname : req.user.lastname,
      role : req.user.role,
      image:req.user.image
    })
})



app.listen(port,() => console.log(`Example app listening on port ${port}`))