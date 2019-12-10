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
