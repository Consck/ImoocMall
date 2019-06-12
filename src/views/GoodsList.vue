<template>
    <div>
        这是商品列表页面
      <span>{{$route.params.goodsId}}</span><br>
      <span>{{$route.params.name}}</span>
      <router-link to="/goods/title">显示商品标题</router-link>  <!---子路由链接地址要写绝对路径--->
      <router-link to="/goods/image">显示商品图片</router-link>
      <div>
        <router-view></router-view>
      </div>
      <!--router-link to="/cart">跳转到购物车页面</router-link><!-->
      <router-link v-bind:to="{name:'cart',params:{cartId:123}}">跳转到购物车页面</router-link>
      <!---button v-on:click = "jump">button-跳转到购物车页面</button><!-->
    </div>
</template>
<style>
</style>
<script>

    export default {
        //$router.push(),
        data() {
            return {
                msg: 'hello vue'
            }
        },
        methods:{
            jump(){
              this.$router.push({path:"/Cart?goodsId=123"});
              //this.$router.go(-2);
            }
        }
    }
</script>
