<template>
  <header>
    <div class="inner">
      <img
        src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
        alt=""
        class="logo"
        style="cursor: pointer;"
        @click="jump"
      />
      <div class="tabs">
        <router-link active-class="active" exact tag="span" to="/"
          >首页</router-link
        >
        <router-link active-class="active" tag="span" to="/pins"
          >沸点</router-link
        >
        <router-link active-class="active" tag="span" to="/topics"
          >话题</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "top",
  methods: {
    jump() {
      // 模拟登陆或注册等按钮跳转页面
      window.console.log("一系列操作")
      const a = false
      if (a) {
        // 跳转页面
        this.$router.push("/")
        // push
        // back
        // go
        // forward
      } else {
        // 不跳转提示用户某些信息
        window.console.log("某些信息")
      }
    }
  }
}
</script>

<style>
header {
  background-color: #fff;
  width: 100%;
}
header .inner {
  width: 70%;
  margin: 0 auto;
  display: flex;
  height: 80px;
  align-items: center;
}
header .tabs {
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
}
header .tabs span {
  cursor: pointer;
  color: #000;
}
header .tabs span.active {
  color: #007fff;
}
</style>
