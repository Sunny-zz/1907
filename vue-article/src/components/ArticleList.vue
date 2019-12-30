<template>
  <div class="article-list">
    <div class="list-tabs">
      <router-link
        active-class="active-color"
        :class="$route.path === '/' ? 'active-color' : ''"
        to="/frontend"
        >前端</router-link
      >
      <router-link active-class="active-color" to="/backend">后端</router-link>
      <router-link active-class="active-color" to="/ui">设计</router-link>
    </div>
    <!-- 在父路由内写  router-view 作用是： 在父路由组件展示子路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 全局的方法在组件内使用 1. 在 template 中可以直接使用  2. 在 script 内使用 this.$moment
// import axios from "axios";
export default {
  name: "articlelist"
  // beforeCreate() {
  //   window.console.log("组件数据事件等处理中")
  // },
  // created() {
  // window.console.log("组件数据事件等处理完毕")
  // 功能： 组件初始化时更新数据
  // },
  // beforeMount() {
  //   window.console.log("组件开始渲染真实 dom 节点")
  // },
  // mounted() {
  // window.console.log("组件渲染完毕，页面呈现")
  // 功能： 组件初始化时获取真实 dom 节点进行操作   例如：使用某些第三方插件(操作真实 dom),插件需要初始化
  // },
  // beforeUpdate() {
  //   window.console.log("组件数据更新")
  // },
  // updated() {
  // window.console.log("组件数据更新完毕")
  // 功能：数据变化之后想要一些跟这个数据变化没有直接关系的事
  // }
  // vue 组件的生命周期
  // 首次渲染  beforeCreate  created  beforeMount   mounted
  // 组件更新  beforeUpdate   updated
  // 组件销毁  beforeDestroy  destroyed
}
</script>

<style>
.article-list {
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  background-color: #fff;
  height: 240px;
}
.article-list .list-tabs {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #000;
}
.article-list .list-tabs a {
  margin-right: 20px;
  color: #000;
}
.article-list .list-tabs a.active-color {
  color: #007fff;
}
.article-list img {
  width: 100%;
  display: block;
}
</style>
