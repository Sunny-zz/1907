<template>
  <div v-if="articleList.length">
    <div class="article" v-for="article in articleList" :key="article.id">
      <p>
        <span class="author">作者·{{ article.author }}</span>
        <span>发布于·{{ article.createTime | moment("from", "now") }}</span>
      </p>
      <router-link
        style="cursor:pointer;"
        tag="h2"
        :to="{
          path: `/article/${article.id}`,
          query: {
            type:
              $route.path === '/'
                ? 'frontendlist'
                : $route.path.replace('/', '') + 'list'
          }
        }"
        >{{ article.title }}</router-link
      >
    </div>
  </div>
  <div v-else>
    <img src="../assets/timg.gif" alt="" />
  </div>
</template>

<script>
// 发请求的时候需要根据地址来获取对应的文章列表然后展示数据
// 先做默认展示前端列表
// 然后点击切换换不同文章列表

export default {
  name: "list",
  data() {
    return {
      articleList: []
    }
  },
  // watch 侦听器
  // 当组件内有两个或以上，只要某些 data 发生了改变就会引起其他一个或多个 data 的变化，并且这种变化不能直接通过 data 计算此时需要使用 watch。额外的侦听器也可以侦听页面的 url 变化，从而去更改页面的 data。
  created() {
    // 发送 axios 请求获取后台数据更新组件的 data
    // window.console.log(this)
    const { path } = this.$route
    // /ui  ===>   /uilist
    // /frontend ==> /frontendlist
    // window.console.log(path);
    this.getList(path)
  },
  watch: {
    "$route.path"(newValue) {
      // window.console.log(newValue, oldValue);
      this.getList(newValue)
    }
  },
  methods: {
    getList(path) {
      this.articleList = []
      this.axios
        .get(
          `http://localhost:3008${
            path === "/" ? "/frontendlist" : path + "list"
          }`
        )
        // 请求地址后面加上 ?_page=2&_limit=2
        .then(res => {
          // window.console.log(res)
          this.articleList = res.data
        })
    }
  }
}
</script>

<style>
.article-list .article {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
}
.article-list .article .author {
  margin-right: 10px;
}
.article-list .article p {
  color: #b2bac2;
  font-size: 12px;
  margin: 0;
}
.article-list .article h2 {
  margin: 0;
  margin-top: 3px;
  font-size: 20px;
  color: #2e3135;
}
</style>
