<template>
  <div v-if="!isError" class="article-wrap">
    <div v-if="article">
      <div class="article">
        <h2>{{ article.title }}</h2>
        <div v-html="article.content"></div>
      </div>
      <div class="comment-box">
        <h4>评论</h4>
        <input v-model.trim="comment" type="text" />
        <button @click="addComment">回复</button>
        <ul class="list">
          <li v-for="comment in article.comments" :key="comment.id">
            {{ comment.text }}
            <button @click="delComment(comment.id)">删除</button>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <img src="../assets/timg.gif" alt="" />
    </div>
  </div>

  <Error v-else />
</template>

<script>
import Error from "./Error"
export default {
  name: "post",
  data() {
    return {
      article: null,
      comment: "",
      isError: false
    }
  },
  components: {
    Error
  },
  created() {
    // 更新文章数据
    // 根据页面地址获取文章 id   获取地址内的动态参数
    // 在组件内想要获取路由的相关信息的话 vue-router 提供了两个全局对象。1. $route 当前路由 2.$router 整个大的 vue 路由
    const { id } = this.$route.params
    // 根据 id 发送请求获取对应文章数据
    window.console.log(this.isError)
    this.axios
      .get(`http://localhost:3008/articles/${id}`)
      .then(res => {
        this.article = res.data
      })
      .catch(() => {
        // this.$router.push("/404")
        this.isError = true
      })
  },
  methods: {
    addComment() {
      const text = this.comment
      if (text) {
        const { id } = this.$route.params
        // 添加评论
        // 由于我们修改后台数据中数组内的某个对象下的 comments 数组。
        // json-server 提供的方案是 使用put 或者 patch 修改具体的这个对象
        // {id:'123',title:'xx',comments: [1,2]}   put使用 需要传递一个新的对象用来替换整个对象 例如 {id:'123',title:'xx',comments: [1,2,3]}
        // {id:'123',title:'xx',comments: [1,2,3]}   patch 使用 需要传递一个对象对象内只需要写上被修改的属性即可 例如 {comments: [1,2]}
        this.axios
          .patch(`http://localhost:3008/articles/${id}`, {
            comments: [
              ...this.article.comments,
              { id: new Date().getTime().toString(), text }
            ]
          })
          .then(res => {
            this.article = res.data
            this.comment = ""
          })
      }
    },
    delComment(commentId) {
      const { id } = this.$route.params
      this.axios
        .patch(`http://localhost:3008/articles/${id}`, {
          comments: this.article.comments.filter(
            comment => comment.id !== commentId
          )
        })
        .then(res => {
          this.article = res.data
        })
    }
  }
}
</script>

<style>
.article-wrap {
  width: 70%;
  margin: 20px auto;
  background-color: #fff;
  height: 600px;
}
.article-wrap img {
  width: 100%;
}
</style>
