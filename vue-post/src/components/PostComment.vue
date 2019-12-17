<template>
  <div class="post-comment">
    <h4>评论</h4>
    <textarea v-model.trim="comment"></textarea>
    <button @click="add">评论</button>
    <ul v-if="comments.length">
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.text }} <button @click="del(comment.id)">删除</button>
      </li>
    </ul>
    <div v-else>评论为空，请添加</div>
  </div>
</template>

<script>
export default {
  name: "post-comment",
  data() {
    return {
      comment: ""
    }
  },
  props: ["comments"],
  methods: {
    add() {
      const text = this.comment
      if (text) {
        // 自定义事件触发时如何传递参数
        this.$emit("add", text)
        this.comment = ""
      } else {
        alert("请输入有效内容")
      }
    },
    del(id) {
      // 删除某条评论
      // 已知数组内某个对象下的 id 属性，将这个对象从数组中删除
      // this.comments.splice(this.comments.findIndex(item => item.id === id), 1);
      // filter
      // this.comments = this.comments.filter(item => item.id !== id)
      // 传递多个参数
      this.$emit("del", id, 100)
    }
  }
}
</script>

<style>
.post-comment {
  width: 800px;
  margin: 0 auto;
}
.post-comment textarea {
  outline: none;
  resize: none;
  display: block;
  padding: 10px;
  font-size: 16px;
  width: 80%;
  height: 100px;
}
</style>
