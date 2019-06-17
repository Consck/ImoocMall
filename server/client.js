//服务端模拟接口调用
let http = require('http');
let util = require('util');
//调用第三方接口
http.get('http://www.imooc.com/u/card',function (res) {
  let data = '';//用来接收返回结果
  //接收数据变化
  res.on("data",function (chunk) {
    data += chunk;
  });
  //监听end数据
  res.on("end",function () {
    let new_data = data.substring(14,data.length-1);
    //console.log("data:" + result);
    let result = JSON.parse(new_data);//将data字符串转换为object返回到前端
    //util.inspect()将object中的ketvalue值打印成字符串，用于调试
    //url.parse()   URL路径解析,将URL转为对象object
    console.log("result:"+util.inspect(result));//result中的msg属性
  })
});
