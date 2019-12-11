<template>
  <div class="app">
    <HelloWorld />
    <button v-on:click="sub">-</button>
    <span>{{ num }}</span>
    <button @click="add">+</button>
    <span :class="active ? 'active' : ''">小圆点</span>
    <div v-show="show" class="back">返回顶部</div>
    <div :style="`display:${show ? 'block' : 'none'}`">
      样式控制不使用 v-show 指令
    </div>
    <div v-if="ready">页面准备好了之后的图片</div>
    <div v-else>请稍等的 gif 图</div>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld"

export default {
  name: "app",
  components: { HelloWorld },
  data() {
    return {
      num: 20,
      active: false,
      show: true,
      ready: true
    }
  },
  methods: {
    sub() {
      window.console.log("1")
    },
    add() {
      window.console.log("2")
    }
  }
}
</script>
<style>
.app .title {
  color: aqua;
}
.active {
  color: red;
}
.back {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 40px;
  padding: 10px 8px;
  text-align: center;
  line-height: 16px;
  background-color: #ccc;
}
</style>
