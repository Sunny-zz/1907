<template>
  <!-- <button :style="{ color: color ? color : '#fff' }" class="btn">
    {{ text ? text : "默认按钮" }}
  </button> -->
  <button @click="btnClick" :class="{ btn: true, [type]: true }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "btn",
  // props
  // 父组件传递过来的参数如何接收
  // 组件接收的 props 跟 data 内的数据性质一样
  // props: ["text", "color", "type", "handleClick"],
  // props 的验证
  props: {
    // 只验证类型
    // text: String,
    // 验证类型、并且设置默认值
    text: {
      type: String,
      default: "默认按钮"
    },
    // 验证只能是某个字符串
    type: {
      // 验证函数  value 指的是传递过来的 type 的值
      validator: function(value) {
        return ["login", "submit", "delete"].indexOf(value) !== -1
      }
    },
    handleClick: Function
  },

  // data  methods   props 三者不能重名
  methods: {
    btnClick() {
      if (this.handleClick) {
        this.handleClick()
      }
    }
  }
}
// 我有三类按钮 登录 提交 删除 普通默认的
// 登录按钮  bg绿  col 白色...
// 提交  bg蓝 col白色 ...
// 删除  bg红 col黑色 ...
</script>

<style>
.btn {
  display: block;
  cursor: pointer;
  padding: 0 25px;
  height: 38px;
  line-height: 38px;
  border: 0;
  background: 0 0;
  background-color: #38f;
  font-size: 16px;
  color: #fff;
  box-shadow: none;
  font-weight: 400;
  /* 字符之间的间距 */
  letter-spacing: 2px;
  /* 单词之间的间距  */
  word-spacing: 10px;
}
.btn:hover {
  background-color: #317ef3;
  box-shadow: 0px 0px 1px #3373d3;
}
.btn.submit {
  background-color: #00b3d4;
  color: aliceblue;
}
.btn.login {
  background-color: yellowgreen;
  color: azure;
}
.btn.delete {
  background-color: rgb(197, 101, 101);
  color: #000;
}
</style>
