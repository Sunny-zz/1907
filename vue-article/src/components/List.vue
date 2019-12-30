<template>
  <div v-if="articleList.length" class="wrap">
    <div class="infinite-list-wrapper" style="overflow:auto">
      <div
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
        :infinite-scroll-distance="5"
        class="list"
      >
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
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>

    <!-- <div class="pic" v-else>
      <img src="../assets/timg.gif" alt="" />
    </div> -->
    <!-- <el-pagination
      @current-change="changePage"
      background
      layout="pager"
      :page-size="1"
      :total="2"
      :current-page="currentPage"
    >
    </el-pagination> -->
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
      articleList: [],
      // currentPage: 1
      loading: false
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
    // this.getList(path, 1)
  },
  watch: {
    "$route.path"(newValue) {
      // window.console.log(newValue, oldValue);
      // this.currentPage = 1
      // this.getList(newValue, 1)
      this.getList(newValue)
    }
  },
  computed: {
    noMore() {
      return this.articleList.length >= 6
    },
    disabled() {
      return this.loading || this.noMore
    }
  },
  methods: {
    getList(path) {
      this.articleList = []
      //http://localhost:3008/frontendList?_page=1&_limit=2
      // this.axios
      //   .get(
      //     `http://localhost:3008${
      //       path === "/" ? "/frontendlist" : path + "list"
      //     }?_page=${page}&_limit=1`
      //   )
      this.axios
        .get(
          `http://localhost:3008${
            path === "/" ? "/frontendlist" : path + "list"
          }?_start=0&_end=3`
        )
        // 请求地址后面加上 ?_page=2&_limit=2
        .then(res => {
          // window.console.log(res)
          this.articleList = res.data
        })
    },
    // changePage(num) {
    //   window.console.log("1")
    //   const { path } = this.$route
    //   this.currentPage = num
    //   this.getList(path, num)
    // }
    load() {
      window.console.log("1111")
      this.loading = true
      const { path } = this.$route
      this.axios
        .get(
          `http://localhost:3008${
            path === "/" ? "/frontendlist" : path + "list"
          }?_start=${this.articleList.length}&_end=${this.articleList.length +
            2}`
        )
        // 请求地址后面加上 ?_page=2&_limit=2
        .then(res => {
          // window.console.log(res)
          setTimeout(() => {
            this.articleList = [...this.articleList, ...res.data]
            this.loading = false
          }, 2000)
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
.wrap {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.wrap > div {
  height: 198.2px;
}
.wrap .list {
  flex-grow: 1;
}
.wrap .pic {
  flex-grow: 1;
}
</style>
