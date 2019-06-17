let user = require('./User');//通过node在服务端运行,运行User.js

console.log(`userName:${user.userName}`);//模板语言
console.log(`I'm ${user.userName},I say ${user.sayHello()}`);

//写一个httpserver服务,创建服务器
let http = require('http')
let url = require('url')
let util = require('util')
let server = http.createServer((req,res)=>{
  res.statusCode = 200;

  res.setHeader("Content-Type","text/plain;charset= utf-8");
  //util.inspect()将object中的ketvalue值打印成字符串，用于调试
  //url.parse()   URL路径解析,将URL转为对象object
  res.end(util.inspect(url.parse(req.url)));
});
//http监听端口
server.listen(3000,'127.0.0.1',()=>{
  console.log("服务器已运行，请打开浏览器，输入:http://127.0.0.1:3000/ 来访问")
})
