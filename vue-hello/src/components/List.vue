<template>
  <div v-if="articles.length" class="article-list">
    <div class="item" v-for="article in articles" :key="article.id">
      <p>
        <span v-if="article.isRecommended">荐·</span><span>专栏</span
        ><span>{{ article.author }}</span>
      </p>
      <h2>{{ article.title }}</h2>
      <div>
        <span
          @click="like(article.id)"
          :style="{ color: article.myLike ? 'red' : 'black' }"
        >
          点赞数:{{ article.likesNum }}
        </span>
        <span>评论数:{{ article.commentsNum }}</span>
      </div>
    </div>
  </div>
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
          isRecommended: false,
          myLike: true
        },
        {
          id: 2,
          title: "es6 7 8 9 10 新特性",
          author: "lucy",
          likesNum: 50,
          commentsNum: 30,
          isRecommended: true,
          myLike: false
        }
      ]
    }
  },
  methods: {
    like(id) {
      // 修改 articles
      // this.articles[0].myLike = !this.articles[0].myLike
      // window.console.log(id)
      const article = this.articles.find(ele => ele.id === id)
      if (article.myLike) {
        article.myLike = false
        article.likesNum--
      } else {
        article.myLike = true
        article.likesNum++
      }
    }
  }
}
</script>

<style>
.article-list .item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.article-list .item p {
  margin: 0;
  font-size: 12px;
}
.article-list .item h2 {
  margin: 0;
}
.article-list .item span {
  user-select: none;
}
</style>
