<template>
  <div class="form">
    <h2>注册大牛帐号</h2>
    <label for="username">用户名</label>
    <!-- <input @input="handleInput" type="text" id="username" :value="username" /> -->
    <input type="text" v-model="username" />
    <br />
    <br />
    <h4>你的互联网职业技能有哪些？</h4>
    <input type="checkbox" name="" id="" /> <label for="">javascript</label>
    <input type="checkbox" name="" id="" /> <label for="">vue</label>
    <input type="checkbox" name="" id="" /> <label for="">react</label>
    <input type="checkbox" name="" id="" /> <label for="">小程序</label>
    <br />
    <br />
    <span>性别</span>
    男<input type="radio" name="" id="" /> 女<input
      type="radio"
      name=""
      id=""
    />
    <br />
    <input type="checkbox" name="" id="" />
    <label for="">是否同意霸王条款</label>
    <br />
    <br />
    <input type="button" value="提交" />
  </div>
</template>

<script>
export default {
  name: "app",
  // vue 数据的双向绑定
  // 1. 输入框内容修改了，data 跟着变
  // 2. data 修改之后输入框内容发生改变
  // vue 双向绑定的语法糖   v-module
  data() {
    return {
      username: "1212"
    }
  },
  methods: {
    // handleInput(event) {
    //   this.username = event.target.value
    //   window.console.log(this.username)
    // }
    log() {
      window.console.log(this.username)
    }
  }
}
</script>

<style></style>
