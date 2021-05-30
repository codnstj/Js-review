var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    console.log(queryData.id);
    console.log(_url);
    var title = queryData.id;

    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`../Data/${queryData.id}`,'utf8',function(err,description){
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

    response.end(Temeplete);
    })

    

 
});
app.listen(3000);

//queryData.id == 쿼리 스트링의 값을 읽어오는것?
// 