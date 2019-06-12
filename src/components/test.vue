<template>
    <div>
      <button @click = "increment">+</button>
      <button v-on:click = "decrement">-</button>
      <p><span>{{num}}</span></p>
    </div>
</template>
<style>
</style>
<script>
    export default {
      props:["num"],//父组件HelloWorld传值num，父组件向子组件传值
      data(){
        return{
          num:0,
        }
      },
      methods:{
        increment:function () {
          //this.num++;
          this.$emit("incre");//间接触发父组件的函数,子组件向父组件传值
        },
        decrement:function () {
          //this.num--;
          this.$emit("decre");
        },
      }
    }
</script>

