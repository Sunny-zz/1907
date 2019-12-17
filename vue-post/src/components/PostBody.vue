<template>
  <div class="post-body">
    <h2>升级vue-element-admin，寻找前端中后台更优解</h2>
    <div>
      <span>阅读数： 5656</span><span>评论数： {{ comments.length }}</span>
    </div>
    <p>
      vue-element-admin作为一个后台前端解决方案，它丰富的插件、优雅的解决方案无需多言。然而在企业级中后台产品的开发中，我们最常遇到的需求就是列表页、详情页。vue-element-admin的解决方案是直接使用element-ui的el-table/el-form实现了需求。由于列表页、详情页有很多的需求是相近甚至相同的，在这样的前提下，
      我考虑是不是能基于vue-element-admin打造更高效的中后台解决方案呢，于是有了vue-srm-admin。
    </p>
  </div>
</template>

<script>
export default {
  name: "post-body",
  props: ["comments"]
}
</script>

<style>
.post-body {
  width: 800px;
  margin: 0 auto;
}
</style>
