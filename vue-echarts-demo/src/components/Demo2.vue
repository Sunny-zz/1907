<template>
  <div class="demo2">
    <div id="main2"></div>
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
  name: "demo2",
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById("main2"))
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      yAxis: [
        {
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
          axisTick: {
            length: 10,
            inside: true
          }
        },
        {
          data: [
            "855职位",
            "875职位",
            "941职位",
            "1144职位",
            "1271职位",
            "1690职位"
          ],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }
      ],
      xAxis: {
        show: false
      },
      series: [
        {
          type: "bar",
          data: [855, 875, 941, 1144, 1271, 1690],
          itemStyle: {
            normal: {
              color: function(params) {
                // window.console.log(params.dataIndex);
                const colors = [
                  "#c23531",
                  "#2f4554",
                  "#61a0a8",
                  "#d48265",
                  "#91c7ae",
                  "#749f83"
                ]
                return colors[params.dataIndex]
              }
            }
          }
        }
      ]
    })
  }
}
</script>

<style>
.demo2 #main2 {
  height: 400px;
}
</style>
