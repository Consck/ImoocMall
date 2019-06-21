//写一个httpserver服务,创建静态服务器
let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs') //文件系统

let server = http.createServer((req,res)=>{
  res.statusCode = 200;

  res.setHeader("Content-Type","text/plain;charset= utf-8");
  var pathname = url.parse(req.url).pathname;
  fs.readFile(pathname.substring(1),function (err,data) {
    if(err){
      res.writeHead(404,{
        'Content-Type':'text/html'
      });
    }else {
      res.writeHead(200,{
        'Content-Type':'text/html'
      })
      res.write(data.toString());
    }
    res.end();  //要放到文件读取内部
  });
  //util.inspect()将object中的ketvalue值打印成字符串，用于调试
  //url.parse()   URL路径解析,将URL转为对象object

});
//http监听端口
server.listen(3000,'127.0.0.1',()=>{
  console.log("服务器已运行，请打开浏览器，输入:http://127.0.0.1:3000/ 来访问")
})
