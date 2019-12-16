<template>
  <div class="drawer">
    <div
      :style="{ opacity: showDrawer ? 1 : 0, height: showDrawer ? '100vh' : 0 }"
      class="mask"
      @click="$emit('close')"
    ></div>
    <!-- 如何在子组件内获取父组件传递过来的自定义事件  1.在 template 内使用 $emit('事件名')  2. script  this.$emit('事件名')-->
    <div
      :style="{ transform: `translateX(${showDrawer ? 0 : '100%'})` }"
      class="drawer-content"
    ></div>
  </div>
</template>

<script>
export default {
  name: "drawer",
  props: ["showDrawer"]
  // data() {
  //   return {
  //     show: false
  //   }
  // },
  // methods: {
  //   open() {
  //     this.show = true
  //     document.querySelector("body").style.overflowY = "hidden"
  //     document.querySelector("body").style.marginRight = "17px"
  //   },
  //   close() {
  //     this.show = false
  //     document.querySelector("body").style.overflowY = "auto"
  //     document.querySelector("body").style.marginRight = "0px"
  //   }
  // }
}
</script>

<style>
.mask {
  width: 100vw;
  height: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
}
.drawer-content {
  width: 200px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform 0.5s linear;
}
</style>
