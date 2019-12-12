<template>
  <div>
    <h2>轮播图</h2>
    <div class="banner">
      <img
        src="../assets/1.jpg"
        alt=""
        :class="{ pic: true, active: activeIndex === 0 ? true : false }"
      />
      <img
        src="../assets/2.jpg"
        alt=""
        :class="{ pic: true, active: activeIndex === 1 ? true : false }"
      />
      <img
        src="../assets/3.jpg"
        alt=""
        :class="{ pic: true, active: activeIndex === 2 ? true : false }"
      />
      <img
        src="../assets/4.jpg"
        alt=""
        :class="{ pic: true, active: activeIndex === 3 ? true : false }"
      />
      <img
        src="../assets/5.jpg"
        alt=""
        :class="{ pic: true, active: activeIndex === 4 ? true : false }"
      />
      <img
        src="../assets/6.jpg"
        alt=""
        :class="{ pic: true, active: activeIndex === 5 ? true : false }"
      />
      <ul class="list">
        <!-- <li
          @click="activeIndex = 0"
          :class="{ 'active-color': activeIndex === 0 ? true : false }"
        ></li> -->
        <li
          @click="btnClick(0)"
          :class="{ 'active-color': activeIndex === 0 ? true : false }"
        ></li>
        <li
          @click="btnClick(1)"
          :class="{ 'active-color': activeIndex === 1 ? true : false }"
        ></li>
        <li
          @click="btnClick"
          :class="{ 'active-color': activeIndex === 2 ? true : false }"
        ></li>
        <li
          @click="btnClick"
          :class="{ 'active-color': activeIndex === 3 ? true : false }"
        ></li>
        <li
          @click="btnClick"
          :class="{ 'active-color': activeIndex === 4 ? true : false }"
        ></li>
        <li
          @click="btnClick"
          :class="{ 'active-color': activeIndex === 5 ? true : false }"
        ></li>
      </ul>
      <div @click="left" class="left">＜</div>
      <div @click="right" class="right">＞</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      activeIndex: 5
    }
  },
  methods: {
    left() {
      // this.activeIndex--
      // if (this.activeIndex < 0) {
      //   this.activeIndex = 5
      // }
      this.activeIndex = this.activeIndex === 0 ? 5 : --this.activeIndex
    },
    right() {
      // this.activeIndex++
      // if (this.activeIndex > 5) {
      //   this.activeIndex = 0
      // }
      this.activeIndex = this.activeIndex === 5 ? 0 : ++this.activeIndex
    },
    btnClick(ind) {
      // window.console.log("1")
      this.activeIndex = ind
      // 给 6 个元素绑定了同一个事件,就需要每一个元素给事件传递一个参数
      // 如何给 vue 事件传参 <li @click='btnClick(实参)'></li>
    }
  }
}
</script>

<style>
.banner {
  width: 590px;
  height: 470px;
  position: relative;
  margin: 0 auto;
}
.banner .pic {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
  width: 590px;
  transition: opacity 1s;
}
.banner .pic.active {
  opacity: 1;
  z-index: 1;
}
.list {
  position: absolute;
  left: 40px;
  bottom: 20px;
  z-index: 2;
  display: flex;
  list-style: none;
  padding-left: 0;
}
.list li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
}
.list li.active-color {
  background-color: rgb(116, 124, 236, 0.5);
}
.left,
.right {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
  margin-top: -30px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
