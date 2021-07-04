var http = require('http'); //http 모듈
var fs = require('fs');     // file system 모듈
var url = require('url');   //url 모듈
 
function templeteHTML(title,list,body){
  return  `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${body}
          </body>
          </html>
          `;
}

function templeteLIST(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list+'</ul>';
  return list;
}

var app = http.createServer(function(request,response){ //http 웹서버 실행 
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
 
        fs.readdir('./data', function(error, filelist){ //파일 목록 읽기
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = templeteLIST(filelist);
          var template = templeteHTML(title,list,`<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        })
 
 
 
      } else {
        fs.readdir('./data', function(error, filelist){
          var list = templeteLIST(filelist);
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var template = templeteHTML(title,list,`<h2>${title}</h2>${description}`);

            response.writeHead(200);
            response.end(template);
          });
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
 
 
 
});
app.listen(3000);