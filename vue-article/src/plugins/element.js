import Vue from "vue"
import {
  Button,
  Input,
  MessageBox,
  Pagination,
  InfiniteScroll
} from "element-ui"
// 给整个 vue 项目添加了一个全局的属性
Vue.prototype.$messageBox = MessageBox
Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(InfiniteScroll)
