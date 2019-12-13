<template>
  <header>
    <h2>头部</h2>
    <!-- 登录按钮 -->
    <!-- 给子组件自定义一个属性将需要的值传递过去 -->
    <Btn text="登录" type="login" :handleClick="login" />
    <!-- 登出按钮 -->
    <Btn text="删除" type="delete" :handleClick="del" />
  </header>
</template>

<script>
import Btn from "./Btn"
export default {
  name: "top",
  components: {
    Btn
  },
  methods: {
    login() {
      window.console.log("我是 header 内的登录操作")
    },
    del() {
      window.console.log("我是 header 内的删除操作")
    }
  }
}
</script>

<style>
header {
  width: 100%;
  height: 300px;
  background-color: #00b3d4;
}
</style>
