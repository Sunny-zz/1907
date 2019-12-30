import Vue from "vue"
// 导入了一个 class Vue 用于创建 vue 的实例 实例下有一个 $mount 方法，该方法的作用是将 render 内的内容挂载到 #app
import App from "./App.vue"
// vue 框架将所有文件当作模块处理都可以引入
import "./assets/global.css"
import './plugins/mint-ui.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
