const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//connection 연결
let client = mysql.createConnection({
  user:"chaewoon",
  password:"password",
  database:"mysqltest"
})
// client.connect(err=>{
//   if(err)throw err;
//   console.log("Mysql Connected...")
// })



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello world');
});

module.exports = router;
