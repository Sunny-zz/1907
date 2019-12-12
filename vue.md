## vue 框架

vue 框架底层是虚拟 DOM 操作，因为直接操作真实 DOM 很多情况下会引起浏览器的回流或者重绘。导致浏览器的一些性能问题。

### vue 的环境搭建

- 官方提供了一个脚手架叫 vue cli ,使用 `npm i -g @vue/cli` 安装脚手架。
- 使用 `vue create 项目名` 就可以创建一个新的 vue 项目了。该项目内就会有 vue 所有的环境。
- 完成之后执行 `cd 项目名` `npm run serve` 就可以在浏览器中打开网址 `http://localhost:8080/` 看到你的 vue 初始项目了。

#### vue 项目结构

- README.md vue 项目的说明
- package.json npm 项目的标志，里面记录了该项目所有的项目依赖和一些脚本命令。
- babel.config.js babel 的配置文件。编译 js 语法的。
- .gitignore 作为 git 仓库上传时忽略上传文件记录。
- src 项目的源代码
- public 放的是 vue 页面模版。
- node_modules 项目依赖

#### 修改 vue 默认项目内容，创建 hello world

- 删除 components 文件夹下的所有内容
- 进入到 App.vue ,删除文件中的内容只剩下

  ```html
  <template>
    <h1>hello vue</h1>
  </template>
  <script>
    export default {
      name: "app"
    }
  </script>
  ```

#### vue 是属于单页面应用(SPA)

SPA 是 Single Page App 的缩写。意思是“单页面应用”。整个网站只有一个页面，但是也可以做成多页的效果。Vue 框架是把 src 下写的所有内容都打包渲染到以 public 下的 index.html 为模版的页面的 #app div 内。vue 项目中 app.vue 组件可以理解为 index.html 的 body。 项目内的 main.js 的作用就是将 App.vue 渲染到 index.html 内的。

#### vue 的组件

组件其实就是页面中一个单元，其实就是页面中的某个结构。组件有三部分组成 `template script style`。组件的好处可以无线复用。组件名首字母最好大写。

- template 其实就代表结构的标签，最外层只能有一个子级
- script 页面的逻辑部分。事件处理，数据交互。。。。。。等。该标签内必须加上以下内容
  ```js
  export default {
    name: "app"
  }
  //name 属性的属性值不能和标签名一致
  ```
- style 结构的样式(该样式默认是全局的)

#### 创建一个 HelloWorld 组件，引入到 App 组件内

- 在 components 文件夹内新建一个文件 HelloWorld.vue,写上默认内容
- 到 App.vue 组件，使用 import 导入 HelloWorld.vue 组件
- 在 App.vue 组件内的 export 对象内添加一个 components 属性,属性值写成 {HelloWorld}
- 在 App.vue 的结构写使用单闭合 HelloWorld 标签来应用这个组件

#### vue 基础语法

##### 模板语法

在 template 结构上直接写 js（将你的组件内的 data 如何放到页面内） 。导致页面的变化的数需要存储在组件的 data 内。页面的变化一定要是数据的改变引起的。数据变页面变。那么页面中数据需要存储在 data 内。在 组件导出的对象内写一个 data 属性，属性值是一个函数该函数必须返回一个对象，对象内写的是你的数据。

- 在开始标签和结束标签之间使用双花括号方式嵌入 data,
  在 template 内

  ```html
  <span>{{ num }}</span>
  ```

  在 script 内

  ```js
  data() {
    return {
      num: 10
    }
  }
  ```

- 在开始标签内使用 data 需要 vue 的指令 v-bind: 可以简写成 :
  在 template 内
  ```html
  <span v-bind:class="activeClass">文本内容</span>
  <span v-bind:class="active ? 'active' : ''">小圆点</span>
  ```
  在 script 内
  ```js
  data() {
    return {
      activeClass: 'active',
      active: true
    }
  }
  ```
- 所有模板语法内都可以嵌套 js 表达式

##### vue 组件的事件绑定

- 在组件的导出对象内添加一个 `methods` 属性,该属性的属性值是一个对象，该对象内只能写方法（不能使用箭头函数）,每一个方法就是一个组件内的全局函数可以当做事件函数。也可以当做普通函数。

  ```js
  methods: {
    handleClick(){
      alert(1111);
    }
  }
  ```

- 在组件的 template 内给某个元素使用 v-on: 指令绑定事件, 该指令可以简写成@

  ```html
  <button v-on:click="handleClick">-</button>
  ```

- 有些时候需要给事件传递参数 写法如下

  ```html
  <li @click="btnClick(0)"></li>
  ```

  ```js
  btnClick(ind) {
        this.activeIndex = ind
      }
  ```

##### vue 的条件渲染

- v-if 指令下的条件渲染,v-if 的值是 true 的话该标签就会渲染到页面中。反之页面中没有这个标签。用于切换次数比较少的元素。
  该指令有一个对立指令 v-else,必须紧跟着 v-if
- v-show 指令下的条件渲染,v-show 控制的是样式的消失出现，并不是结构。用于反复出现或消失的元素。

##### vue 的样式控制 class 与 style 的绑定

- class 的绑定
  - 直接使用 bind 指令绑定，里面做 js 逻辑处理
  - 对象语法
    isActive 是 data
    ```html
    <div :class="{ 'active-bg': isActive, circle: true }"></div>
    ```
  - 数组语法
    isActive 是 data
    ```html
    <div :class="['circle', isActive ? 'active-bg' : '']"></div>
    ```
- style 的绑定
  - 直接使用 bind 指令绑定，里面做 js 逻辑处理
  - 对象语法
    ```html
    <span
      :style="{
          color:
            highLight === 'one' ? '#00b3d4' : highLight === 'two' ? 'red' : ''
        }"
    >
      dream
    </span>
    ```

##### vue 的列表渲染

需要使用 v-for 指令,v-for 指令写在了那个标签上就会把哪个标签创建多个。

写法如下
template 内

```html
<li v-for="item in numArr" :key="item">
  {{ item }}
</li>
```

script 内

```js
data() {
    return {
      numArr: [1, 2, 3, 4]
    }
  }
```

`item in numArr` 里面的 item 指的是数据内的元素，当 v-for 时必须加上 key 属性，而且属性值必须唯一(一般等于数据的 id)。但是当你想用数组内对应的索引值时需要把 v-for 写成 `(item,index) in numArr`。 item 和 index 名称可以随意设置，顺序不能变。

##### data(状态) 的修改

我们已经将 data 定义好并且在页面中使用了。那么页面的变化只需要修改 data 即可。页面会自动检测 data 的更新，从而更新页面。一般我们修改 data 都是在事件内。事件都声明在 methods 对象下。使用 this.数据名 获取并修改。

##### vue 表单输入绑定
