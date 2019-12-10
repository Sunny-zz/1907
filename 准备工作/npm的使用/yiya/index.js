// const obj = { name: "xxx" }
// const obj1 = { age: 18 }

// // 第三方模块导入
// const $ = require("jquery")
// // 自定义模块导入
// const b = require("./about.js")
// const obj3 = $.extend({}, obj, obj1)
// console.log(obj3, b)

// 模块的导入必须写在页面的顶部
// es6 的模块
// 命名导入   bb 的名字和导出的名字一致
// import { bb as b, cc as c } from "./about.js"
// import * as c from "./about.js"
// * as c 的意思是将所有导出的东西全部放到 c 内(就是一个对象)
// as 改名
// console.log(c)
// const cc = 90000

// 默认导入 名字随便设置

import xxx from "./about.js"
// 第三方模块导入
import $ from "jquery"
console.log(xxx)
const newObj = $.extend({}, { name: "xx" }, { age: 10 })
console.log(newObj)
$(".box").css("background-color", "red")
