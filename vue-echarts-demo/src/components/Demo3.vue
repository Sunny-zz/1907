<template>
  <div class="demo3">
    <div id="main3"></div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts"
// 引入柱状图
import "echarts/lib/chart/pie"
// 引入提示框和标题组件
import "echarts/lib/component/tooltip"
import "echarts/lib/component/legend"
export default {
  name: "demo3",
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById("main3"))
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      legend: {
        orient: "vertical",
        right: 50,
        bottom: 50,
        data: ["3k-6k", "6k-9k", "9k-12k", "12k-15k"]
      },
      series: [
        {
          name: "薪资待遇",
          type: "pie",
          radius: "80%",
          center: ["60%", "50%"],
          roseType: "radius",
          data: [
            {
              name: "3k-6k",
              value: "20"
            },

            {
              name: "9k-12k",
              value: "22"
            },
            {
              name: "6k-9k",
              value: "14"
            },
            {
              name: "12k-15k",
              value: "44"
            }
          ].sort(function(a, b) {
            return a.value - b.value
          }),
          itemStyle: {
            normal: {
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function() {
            return Math.random() * 200
          }
        }
      ]
    })
  }
}
</script>

<style>
.demo3 #main3 {
  height: 400px;
  background-color: #ccc;
}
</style>
