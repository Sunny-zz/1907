<template>
  <div class="todo">
    <h1>TODO</h1>
    <div>
      <label
        class="all"
        for="all"
      >
        <input
          type="checkbox"
          id="all"
          v-model="allChecked"
        >
        <span>❯</span>
      </label>
      <input
        type="text"
        v-model.trim="todo"
        @keyup.enter="addTodo"
      />
    </div>
    <!-- <button @click="addTodo">添加</button> -->
    <ul v-if="todos.length">
      <li
        v-for="todo in showTodos"
        :key="todo.id"
      >
        <label :for="todo.id"> <input
            type="checkbox"
            :id="todo.id"
            v-model="todo.isCompleted"
          >
          <span></span>
        </label>
        <span :style="todo.isCompleted? { color: '#ccc', textDecoration: 'line-through' }: ''">
          {{ todo.text }}
        </span>
        <span
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
      type: "all"
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
    },
    allChecked: {
      get() {
        return this.todos.every(item => item.isCompleted);
      },
      // 当 allChecked 发生改变时，这个改变不是由改变 todos 数据引起的，那么该计算属性的 set 会被触发
      set(newValue) {
        this.todos = this.todos.map(item => {
          item.isCompleted = newValue;
          return item;
        });
      }
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
    // completed(id) {
    //   // window.console.log(id)
    //   this.todos.find(item => item.id === id).isCompleted = !this.todos.find(
    //     item => item.id === id
    //   ).isCompleted;
    // },
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
.todo {
  margin-left: 200px;
}
.todo ul {
  padding-left: 0;
}
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
.todo .all #all {
  display: none;
}
.todo .all span {
  font-size: 20px;
  color: #ccc;
  width: 20px;
  height: 20px;
  text-align: center;
  display: block;
  transform: rotate(90deg);
  float: left;
}
.todo .all #all:checked + span {
  color: #000;
}
.todo li {
  display: flex;
  width: 200px;
  justify-content: space-between;
}
.todo li span.del {
  opacity: 0;
  cursor: pointer;
}
.todo li:hover span.del {
  opacity: 1;
}
li label input {
  display: none;
}
li label span {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-size: 100%;
}
li label > input:checked + span {
  background-image: url("./assets/gou.png");
}
</style>
