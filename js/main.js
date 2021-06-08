var http = require('http'); //http 라이브러리 
var fs = require('fs');    // 파일 시스템 라이브러리
var url = require('url'); // url 라이브러리 
var app = http.createServer(function(request,response){
    var _url = request.url; //
    var queryData = url.parse(_url,true).query;
    var pathname = url.parse(_url,true).pathname;
    
    if(pathname ==='/'){
      if(queryData.id === undefined){
        fs.readFile(`../Data/${queryData.id}`,'utf8',function(err,description){
        var title = 'welcome';
        var description = 'Hello, Node.JS';
        var Temeplete = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href='/?id=HTML'>HTML</a></li>
              <li><a href='/?id=CSS'>CSS</a></li>
              <li><a href='/?id=JavaScripts'>JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
        response.writeHead(200);
        response.end(Temeplete);
        })
      }else{

        fs.readFile(`../Data/${queryData.id}`,'utf8',function(err,description){
          var title = queryData.id;
          var Temeplete = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href='/?id=HTML'>HTML</a></li>
              <li><a href='/?id=CSS'>CSS</a></li>
              <li><a href='/?id=JavaScripts'>JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
        response.writeHead(200);
        response.end(Temeplete);
        })}
    } else {
      response.writeHead(404);
      response.end('Not found');
    }

   


    

 
});
app.listen(3000);

//queryData.id == 쿼리 스트링의 값을 읽어오는것?
// 