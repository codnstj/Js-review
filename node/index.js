const express = require('express')  //express 모듈 가져오기
const app = express() //express 함수를 이용해서 새로운 앱 만들기
const port = 3000 //포트는 3000 번을 백엔드 서버로써 사용

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Seochaewoon:1234@cluster.ynchd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false
}).then(()=> console.log('MongoDB Connected'))
  .catch(err => console.log(err))



app.get('/',(req,res) => res.send('Hello World!'))

app.listen(port,() => console.log(`Example app listening on port ${port}`))