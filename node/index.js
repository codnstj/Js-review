const express = require('express') //express 모듈 가져오기
const app = express() //express 함수를 이용해서 새로운 앱 만들기
const port = 3000 //포트는 3000 번을 백엔드 서버로써 사용

const config = require('./config/key'); //비밀정보를 가져올 파일 가져오기

const {User} = require("./models/User"); //user 스키마 가져오기
const bodyParser = require('body-parser'); //body-parser 모듈 가져오기


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

//application/json
app.use(bodyParser.json()) 

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
  useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false
}).then(()=> console.log('MongoDB Connected'))
  .catch(err => console.log(err))



app.get('/',(req,res) => res.send('Hello World !!'))

app.post('/register',(req,res) => {
  //회원 가입 할때 필요한 정보들을 client 에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
    
    const user = new User(req.body) //모든 정보를 모델에 넣어줌

    user.save((err,userInfo)=>{
      if(err) return res.json({ success:false, err})
      return res.status(200).json({
        success:true
      })
    })

})




app.listen(port,() => console.log(`Example app listening on port ${port}`))