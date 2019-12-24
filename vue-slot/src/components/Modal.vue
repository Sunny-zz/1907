<template>
  <!-- 应用情景1.展示信息类弹窗 2.删除提示框 -->
  <div
    class="mask"
    :style="{display: visible ? 'flex' : 'none' }"
  >
    <div class="modal">
      <div class="modal-header">
        <h4>{{title}}</h4>
        <span @click="$emit('close')">×</span>
      </div>
      <div class="modal-content">
        <slot>
          <p>Some Contents</p>
          <p>Some Contents</p>
          <p>Some Contents</p>
        </slot>
      </div>
      <div class="modal-btn">
        <!-- 点取消关闭弹窗，点击确定关闭弹窗，还可能执行父组件想要执行的事情-->
        <button
          v-if="isHasCancleBtn"
          @click="$emit('close')"
        >取消</button>
        <button @click="handleOk">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    title: {
      type: String,
      default: "Basic Modal"
    },
    visible: {
      type: Boolean,
      default: false
    },
    isHasCancleBtn: {
      type: Boolean,
      default: true
    }
    // onOk: {
    //   type: Function
    // }
  },
  methods: {
    handleOk() {
      this.$emit("close");
      this.$emit("onOk");
      // if (this.onOk) {
      //   this.onOk();
      // }
    }
  }
};
</script>

<style>
.mask {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.mask .modal {
  display: flex;
  flex-direction: column;
  width: 520px;
  background-color: #fff;
  margin-top: 100px;
  border-radius: 5px;
}
.mask .modal .modal-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  /* flex-shrink: 0; */
}
.mask .modal .modal-header h4 {
  margin: 0;
}
.mask .modal .modal-content {
  padding: 10px;
}

.mask .modal .modal-btn {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid #ccc;
  align-items: center;
  /* flex-shrink: 0; */
}
</style>