//定义函数checklogin，返回一个promise对象
let checklogin = function () {
  //Promise对象，对象中接收一个回调，回调中包含两个参数
  return new Promise(function (resolve,reject) {   //resolve是接口调用成功需要返回的回调，reject是接口调用失败返回的回调
    //获取一个cookie
    //let flag = document.cookie.indexOf("userId")>-1?true:false;
    //赋予默认值
    if(flag=true){
      resolve({
        status:0,
        result:true
      })
    }else {
      reject("error");
    }
  })
}

//Promise解决callback，不让回调
let getUserInfo = ()=>{
  return new Promise((resolve,reject)=>{
    let UserInfo = {
      UserId:"101"
    }
    resolve(UserInfo);
  });
}

//调用checklogin方法使用then
checklogin().then((res)=> {
  if(res.status==0){
    console.log("login success");
    return getUserInfo();
  }
}).then((res2)=>{
  console.log(`userId:${res2.UserId}`)
}).catch((error)=>{
  //！！！输出参数使用符号``，并不是''
  console.log(`error:${error}`)
})


//可以同时调用多个请求
Promise.all([checklogin(),getUserInfo()]).then(([res1,res2])=>{
  console.log(`result1:${res1.result},result2:${res2.UserId}`)
})
