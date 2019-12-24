<template>
  <div>
    <h2>对话框 demo</h2>
    <button @click="visibleShowInfo = true">展示信息</button>
    <Modal
      :visible="visibleShowInfo"
      @close="closeInfo"
      title="人员信息展示"
      :isHasCancleBtn="false"
    >
      <div>姓名: {{ user.name }}</div>
    </Modal>
    <button @click="visible = true">删除</button>
    <Modal :visible="visible" @close="close" title="提示信息" @onOk="del">
      <div style="color: red;">是否真的要删除(不可恢复)?</div>
    </Modal>
    <Layout>
      <!-- v-slot: 可以简写成 # -->
      <template #header>
        <h1>title</h1>
      </template>
      <p>dasjdhg ajhga sd</p>
      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </Layout>

    <h2>vue 的过渡和动画</h2>
    <button @click="show = !show">出现或消失</button>
    <transition name="fade">
      <div class="text" v-show="show">hello</div>
    </transition>
  </div>
</template>

<script>
import Modal from "./components/Modal"
import Layout from "./components/Layout"
export default {
  name: "app",
  components: {
    Modal,
    Layout
  },
  data() {
    return {
      visibleShowInfo: false,
      visible: false,
      user: {
        name: "lucy",
        age: 18,
        firstName: "潘",
        lastName: "婷"
      },
      show: true
    }
  },
  methods: {
    close() {
      this.visible = false
    },
    closeInfo() {
      this.visibleShowInfo = false
    },
    del() {
      window.console.log("删除")
    }
  }
}
</script>

<style>
.text {
  margin-left: 200px;
}
/* xx-enter-active  xx-leave-active 出现和离开被激活时，也就是相关的 data 改变 */
.fade-enter-active,
.fade-leave-active {
  transition: all 2s;
}
/* xx-enter 出现开始    xx-leave-to 消失结束  这两个名字规定的是过渡的某个一个阶段 */
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  margin-left: 400px;
}
.fade-enter {
  opacity: 0;
  margin-left: 0px;
}
</style>
