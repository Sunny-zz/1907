<template>
  <div class="todo">
    <h1>TODO</h1>
    <input
      type="text"
      v-model.trim="todo"
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">添加</button>
    <ul v-if="todos.length">
      <li
        :style="
          todo.isCompleted
            ? { color: '#ccc', textDecoration: 'line-through' }
            : ''
        "
        v-for="todo in showTodos"
        :key="todo.id"
      >
        <span @click="completed(todo.id)">{{ todo.text }}</span> <span
          @click="del(todo.id)"
          class="del"
        >×</span>
      </li>
    </ul>
    <div>
      <span>{{ activeNum }} {{ activeNum === 1 ? "item" : "items" }} left</span>
      <span
        @click="type = 'all'"
        :class="type === 'all' ? 'active' : ''"
      >
        All
      </span>
      <span
        @click="type = 'active'"
        :class="type === 'active' ? 'active' : ''"
      >
        Active
      </span>
      <span
        @click="type = 'completed'"
        :class="type === 'completed' ? 'active' : ''"
      >
        Completed
      </span>
      <span @click="clearCompleted">Clear Completed</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      todo: "",
      todos: [
        {
          id: "213123",
          text: "睡觉",
          isCompleted: false
        }
      ],
      type: "active"
    };
  },
  computed: {
    activeNum() {
      return this.todos.filter(item => !item.isCompleted).length;
    },
    showTodos() {
      return this.type === "all"
        ? this.todos
        : this.type === "active"
        ? this.todos.filter(item => !item.isCompleted)
        : this.todos.filter(item => item.isCompleted);
    }
  },
  methods: {
    addTodo() {
      // 对象的解构赋值
      const { todo } = this;
      if (todo) {
        // window.console.log("1111111")
        const todoObj = {
          text: todo,
          id: new Date().getTime().toString(),
          isCompleted: false
        };
        this.todos.push(todoObj);
        this.todo = "";
      } else {
        alert("请输入有效内容");
      }
    },
    completed(id) {
      // window.console.log(id)
      this.todos.find(item => item.id === id).isCompleted = !this.todos.find(
        item => item.id === id
      ).isCompleted;
    },
    del(id) {
      // window.console.log(id);
      this.todos = this.todos.filter(item => item.id !== id);
    },
    clearCompleted() {
      this.todos = this.todos.filter(item => !item.isCompleted);
    }
  }
};
</script>

<style>
span {
  user-select: none;
}
.todo > div > span {
  cursor: pointer;
  padding: 8px;
  border: 1px solid #fff;
}
.todo .active {
  border: 1px solid #ccc;
}
.todo li {
  display: flex;
  width: 200px;
  justify-content: space-between;
}
.todo li span.del {
  display: none;
  cursor: pointer;
}
.todo li:hover span.del {
  display: block;
}
</style>
