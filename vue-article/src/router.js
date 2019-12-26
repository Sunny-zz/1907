import Vue from "vue"
import VueRouter from "vue-router"
import ArticleList from "./components/ArticleList.vue"
import Pins from "./components/Pins.vue"
import Topics from "./components/Topics.vue"
import Article from "./components/Article.vue"
import List from "./components/List.vue"
import Error from "./components/Error.vue"
Vue.use(VueRouter)

// 创建 vue 路由
// 1. 引入路由组件 第 3 4 5 行代码

// 2. 定义路由

const routes = [
  {
    path: "/",
    component: ArticleList,
    // 路由嵌套
    // 注意子路由地址一般不加 /
    children: [
      {
        // 父路由出现是默认展示
        path: "",
        component: List
      },
      {
        path: "frontend",
        component: List
      },
      {
        path: "backend",
        component: List
      },
      {
        path: "ui",
        component: List
      }
    ]
  },
  {
    path: "/pins",
    component: Pins
  },
  {
    path: "/topics",
    component: Topics
  },
  {
    // 很多地址指向这个路由(很多地址展示同一个页面)
    // 所以路由 path 需要写成动态路由形式 需要设置 动态路径参数
    // 动态路径参数 以冒号开头
    path: "/article/:id",
    component: Article
  },
  {
    path: "/*",
    component: Error
  }
]

// 3. 创建 router 实例
const router = new VueRouter({
  // routes: routes
  routes,
  mode: "history"
})

export default router

// 4. 在 main.js 导入导出的路由，在 mian.js 使用 router ,从而让整个应用都有路由功能

// 5. 在任何一个组件内可以使用  router-view 标签展示路由 并且可以使用 router-link 标签进行路由切换

// 注意 vue 是单页面应用他模拟多页有两种方式(路由模式有两种) 1. 使用锚点模拟多页(页面地址就会多 /#/)  2.完全参考浏览器历史
// 默认模式是第一种 可以在创建 router 实例时，使用 mode 属性修改路由模式 属性的属性值(hash  history )
