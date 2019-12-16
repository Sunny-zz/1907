<template>
  <section class="main">
    <h2>主体</h2>
    <Btn />
    <Card title="第嘉学社" url="www.baidu.com" :imgSrc="imgOne" />
    <!-- 当你想要将一个图片传递给子组件直接使用本地地址传递是不可以的，解决方案一:将地址换成网络地址;二: 将本地的图片当作模块导入，然后传递 -->
    <button @click="open">open</button>
    <Drawer :showDrawer="showDrawer" @close="close" />
    <!-- 父子组件之间传递参数时当参数是一个函数时可以使用自定义事件的方式传递 给子组件绑定一个自定义事件 -->
  </section>
</template>

<script>
import Btn from "./Btn"
import Card from "./Card"
import Drawer from "./Drawer"
import imgOne from "../assets/QBnOOoLaAfKPirc.png"
export default {
  name: "maincontent",
  components: {
    Btn,
    Card,
    Drawer
  },
  data() {
    return {
      imgOne,
      showDrawer: false
    }
  },
  methods: {
    close() {
      this.showDrawer = false
      document.querySelector("body").style.overflowY = "auto"
      document.querySelector("body").style.marginRight = "0px"
    },
    open() {
      this.showDrawer = true
      document.querySelector("body").style.overflowY = "hidden"
      document.querySelector("body").style.marginRight = "17px"
    }
  }
}
</script>

<style>
.main {
  width: 100%;
  height: 500px;
  background-color: #ccc;
}
.main .card-wrap {
  margin: 0 auto;
}
</style>
