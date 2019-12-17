<template>
  <div>
    <h1>文章展示 Demo</h1>
    <PostBody :comments="comments" />
    <!-- 组件接收 props 只能直接使用不能直接修改 -->
    <PostComment :comments="comments" @add="add" @del="del" />
  </div>
</template>

<script>
import PostBody from "./components/PostBody"
import PostComment from "./components/PostComment"
export default {
  name: "app",
  components: {
    PostBody,
    PostComment
  },
  data() {
    return {
      comments: [
        {
          id: "112312",
          text: "ddashdf asdf ajd"
        },
        {
          id: "812312",
          text: "ddashdf a12sdf ajd"
        }
      ]
    }
  },
  methods: {
    add(comment) {
      this.comments.unshift({
        id: new Date().getTime().toString(),
        text: comment
      })
    },
    del(id, num) {
      window.console.log(num)
      this.comments = this.comments.filter(item => item.id !== id)
    }
  }
}
</script>

<style></style>
