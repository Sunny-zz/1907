<template>
  <div class="demo1">
    <button @click="change">更新数据</button>
    <div v-if="arr.length" id="main"></div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts"
// 引入柱状图
import "echarts/lib/chart/bar"
// 引入提示框和标题组件
import "echarts/lib/component/tooltip"
import "echarts/lib/component/title"
export default {
  name: "demo1",
  data() {
    return {
      arr: []
    }
  },
  methods: {
    change() {
      this.arr = [
        {
          id: "123121",
          productType: "羊毛衫5",
          sales: 50
        },
        {
          id: "12312",
          productType: "羊毛衫6",
          sales: 124
        },
        {
          id: "12312",
          productType: "羊毛衫7",
          sales: 29
        },
        {
          id: "12312",
          productType: "羊毛衫8",
          sales: 400
        }
      ]
    }
  },
  created() {
    setTimeout(() => {
      this.arr = [
        {
          id: "123121",
          productType: "羊毛衫1",
          sales: 5
        },
        {
          id: "12312",
          productType: "羊毛衫2",
          sales: 20
        },
        {
          id: "12312",
          productType: "羊毛衫3",
          sales: 25
        },
        {
          id: "12312",
          productType: "羊毛衫4",
          sales: 280
        }
      ]
    }, 2000)
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    // window.console.log(document.getElementById("main"))
    // if (document.getElementById("main")) {
    // }
  },
  updated() {
    // window.console.log(this.arr)
    const c = 10
    const d = 9
    if (c > d) {
      const myChart = echarts.init(document.getElementById("main"))
      // 绘制图表
      window.console.log(this.arr)
      myChart.setOption({
        title: {
          text: "第嘉商品销量"
        },
        tooltip: {},
        xAxis: {
          data: this.arr.map(item => item.productType)
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.arr.map(item => item.sales)
          }
        ]
      })
    }
  }
}
</script>

<style>
.demo1 {
  height: 400px;
}
.demo1 #main {
  height: 400px;
}
</style>
