<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <countter v-bind:num="num" v-on:incre="increment" v-on:decre="decrement"></countter>
    <p>parent:{{num}}</p>
  </div>
</template>

<script>
  import Countter from './Counter'
export default {
  name: 'Hello',
  data () {
    return {
      num:10,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Countter
  },
  methods:{
    increment:function () {
      this.num++;
    },
    decrement:function () {
      this.num--;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
