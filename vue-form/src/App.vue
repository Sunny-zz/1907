<template>
  <form class="form">
    <h2>注册大牛帐号</h2>
    <label for="username">用户名</label>
    <!-- <input @input="handleInput" type="text" id="username" :value="username" /> -->
    <input
      type="text"
      v-model="username"
    />
    <br>
    <label for="password">密码</label>
    <input
      type="password"
      v-model.number="password"
    />
    <br />
    <br />
    <h4>你的互联网职业技能有哪些？</h4>
    <input
      type="checkbox"
      v-model="skill"
      value="javascript"
    /> <label for="">javascript</label>
    <input
      type="checkbox"
      v-model="skill"
      value="vue"
    /> <label for="">vue</label>
    <input
      type="checkbox"
      v-model="skill"
      value="react"
    /> <label for="">react</label>
    <input
      type="checkbox"
      value="小程序"
      v-model="skill"
    /> <label for="">小程序</label>
    <br />
    <br />
    <span>性别</span>
    男<input
      v-model="sex"
      value="男"
      type="radio"
    /> 女<input
      v-model="sex"
      value="女"
      type="radio"
    />
    <br />
    <input
      type="checkbox"
      v-model="isAgree"
    />
    <label for="">是否同意霸王条款</label>
    <br />
    <br />
    <input
      type="button"
      value="提交"
      @click="submit"
    />
    <button @click.prevent="handleClick">普通按钮</button>
  </form>
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
      username: "",
      password: "",
      skill: [],
      sex: "",
      isAgree: false
    };
  },
  methods: {
    // handleInput(event) {
    //   this.username = event.target.value
    //   window.console.log(this.username)
    // }
    // log() {
    //   window.console.log(this.username);
    // }
    submit() {
      window.console.log(
        this.username,
        this.password,
        this.skill,
        this.sex,
        this.isAgree
      );
    },
    // 修饰符   指令修饰符  事件修饰符
    // 事件
    handleClick() {
      // event.preventDefault();
      window.console.log("1111");
    }
  }
};
</script>

<style></style>
