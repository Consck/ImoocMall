import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
Vue.use(Router)

//default代表默认输出
export let router =  new Router({
  mode:"history",
  routes:[
    {
    path:'/',
    name:'Hello',
    components:{
      default:Hello,
    }
  }
  ]
})
// export default new Router({
//   mode:'history',
//   routes: [
//     {
//       path: '/',  //配置动态路由
//       name: 'GoodsList',
//       components: {
//         default:GoodsList,
//         title:Title,
//         image:Image
//       }
//     },
//     {
//       path:'/cart/:cartId',
//       name:'cart',
//       component:Cart
//     }
//   ]
// })
