// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import VueLayzLoad from 'vue-lazyload'
// import * as util from "./util"
Vue.config.productionTip = false
Vue.use(VueLayzLoad,{
  loading:"../static/loading/loading-bars.svg"
})
// console.log(`sum:${util.sum(1,6)}`);
// console.log(`miuns:${util.miuns(10,2)}`);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// define('util',function () {
//   return {
//     sum:function () {
//
//     },
//     miuns:function () {
//
//     }
//   }
// })
