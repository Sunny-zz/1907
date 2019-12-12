<template>
  <div v-if="articles.length" class="article-list">列表</div>
  <img v-else src="../assets/timg.gif" alt="" />
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "git 原理",
          author: "lily",
          likesNum: 100,
          commentsNum: 20,
          isRecommended: false
        },
        {
          id: 2,
          title: "es6 7 8 9 10 新特性",
          author: "lucy",
          likesNum: 50,
          commentsNum: 30,
          isRecommended: true
        }
      ]
    }
  }
}
</script>

<style></style>
