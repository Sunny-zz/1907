<template>
  <div class="list-wrap">
    <mt-loadmore
      class="loadmore"
      ref="loadmore"
      :bottom-all-loaded="allLoaded"
      :bottom-method="loadBottom"
      :top-method="loadTop"
      :bottomDistance="100"
    >
      <h1>hello</h1>
      <ul class="list">
        <li v-for="(item, index) in numArr" :key="index">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      numArr: [1, 23, 56, 13, 67, 32, 56, 7, 4, 9],
      allLoaded: false
    };
  },
  methods: {
    loadTop() {
      setTimeout(() => {
        const newArr = [];
        for (let i = 0; i < 10; i++) {
          newArr.push(Math.ceil(Math.random() * 100));
        }
        this.numArr = newArr;
        // refs  vue 提供的获取原生 dom 节点的方案
        // 使用方法 在标签内加上 ref='名'  在 js 内 使用 this.$refs.名 获取
        this.$refs.loadmore.onTopLoaded();
      }, 2000);
    },
    loadBottom() {
      // this.allLoaded = true; // 若数据已全部获取完毕
      setTimeout(() => {
        const newArr = [];
        for (let i = 0; i < 20; i++) {
          newArr.push(Math.ceil(Math.random() * 100));
        }
        this.numArr = [...this.numArr, ...newArr];
        if (this.numArr.length >= 100) {
          this.allLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      }, 2000);
    }
  }
};
// Math.ceil(Math.random() * 100);
</script>

<style>
.list-wrap {
  height: 100vh;
  overflow: auto;
}
.list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.list li {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-bottom: 1px solid #000;
}
.loadmore .mint-loadmore-top {
  background-color: #000;
  color: #fff;
}
</style>