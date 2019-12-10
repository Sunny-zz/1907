// node 前端模块  核心模块(后台的内容)   第三方模块(前端的工具模块)   自定义模块(自己写的js)
// 模块可以相互导入
const a = 10
// 自定义模块导入 模块 b.js 导出的内容
const bbb = require("./b.js")
console.log(bbb)
