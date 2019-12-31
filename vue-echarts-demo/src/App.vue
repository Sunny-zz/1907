<template>
  <div>
    <div v-if="!login">
      <input type="text" v-model="token" />
      <button @click="denglu">登录</button>
    </div>
    <button v-else>退出</button>
    <h1>hello</h1>
    <Demo1 />
    <Demo2 />
    <Demo3 />
  </div>
</template>

<script>
import Demo1 from "./components/Demo1"
import Demo2 from "./components/Demo2"
import Demo3 from "./components/Demo3"
import axios from "axios"
export default {
  name: "app",
  data() {
    return {
      token: "79b3b12e-9631-467b-9210-c68449c98a35",
      login: null
    }
  },
  components: {
    Demo1,
    Demo2,
    Demo3
  },
  created() {
    if (sessionStorage.getItem("token")) {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          window.console.log(res.data)
          this.login = res.data
        })
    }
  },
  methods: {
    denglu() {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: this.token
        })
        .then(res => {
          window.console.log(res.data)
          // h5 的本地存储 直到浏览不关闭
          sessionStorage.setItem("token", this.token)
          this.login = res.data
        })
    }
  }
}
</script>

<style></style>
