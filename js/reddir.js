var testForder = './data';
var fs = require('fs');

fs.readdir(testForder,function(error , filelist){
  console.log(filelist);
})