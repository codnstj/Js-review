const http = require('http');
const server = http.createServer( (req,res) =>{
  res.statusCode = 200;
  res.end('Hello Node!')
})

const port =3000;

server.listen(port,()=>{ 
  console.log(`The server is listening at port ${port}`)
})

