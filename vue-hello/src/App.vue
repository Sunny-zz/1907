<template>
  <div class="app">
    <HelloWorld />
    <button v-on:click="sub">-</button>
    <span>{{ num }}</span>
    <button @click="add">+</button>
    <!-- 事件绑定时 可以直接设置成事件函数  也可以直接操作 data -->
    <button @click="num++">
      +
    </button>
    <span :class="active ? 'active' : ''">小圆点</span>
    <div v-show="show" class="back">返回顶部</div>
    <button @click="show = false">让返回顶部消失</button>
    <button @click="show = true">让返回顶部出现</button>
    <button @click="show = !show">让返回顶部反复出现消失</button>
    <div :style="`display:${show ? 'block' : 'none'}`">
      样式控制不使用 v-show 指令
    </div>
    <div v-if="ready">页面准备好了之后的图片</div>
    <div v-else>请稍等的 gif 图</div>
    <br />
    <br />
    <br />
    <Banner />
    <List />
    <VueForm />
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld"
import VueForm from "./components/VueForm"
import Banner from "./components/Banner"
import List from "./components/List"
export default {
  name: "app",
  components: { HelloWorld, VueForm, Banner, List },
  data() {
    return {
      num: 21,
      active: false,
      show: true,
      ready: true
    }
  },
  methods: {
    sub() {
      // 获取  this.数据名
      // 修改
      // window.console.log(this.num);
      this.num--
    },
    add() {
      this.num++
      // window.console.log(this.num);
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
