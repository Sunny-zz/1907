<template>
  <div v-if="productInCartList.length" class="shopping-cart">
    <input v-model="allChecked" type="checkbox" />全选
    <div
      class="item-product"
      :style="{ backgroundColor: item.checked ? '#fff4e8' : '#fff' }"
      v-for="item in productInCartList"
      :key="item.id"
    >
      <input type="checkbox" v-model="item.checked" />
      <img :src="item.productImg" alt="" />
      <p>{{ item.productName }}</p>
      <span class="price">￥{{ item.price.toFixed(2) }}</span>
      <div class="count">
        <button
          :disabled="item.count > 1 ? false : true"
          @click="$emit('sub', item.id)"
          :style="{ color: item.count > 1 ? '#000' : '#ccc' }"
        >
          -
        </button>
        <input type="text" v-model="item.count" />
        <button @click="$emit('add', item.id)">+</button>
      </div>
      <span>￥{{ (item.count * item.price).toFixed(2) }}</span>
      <button @click="$emit('del', item.id)" class="del">删除</button>
    </div>
    <input v-model="allChecked" type="checkbox" />全选
    <div>
      总价
      <span>
        ￥{{ total }}
        <!-- 在 template 内写过的 js 操作或运算不提倡可以使用 computed 计算属性替代 -->
      </span>
    </div>
  </div>
  <div v-else>购物车为空</div>
</template>

<script>
export default {
  name: "shopping-cart",
  props: ["productInCartList"],
  computed: {
    total() {
      return this.productInCartList
        .reduce((res, item) => {
          if (item.checked) {
            return (res += item.price * item.count)
          } else {
            return res
          }
        }, 0)
        .toFixed(2)
    },
    // 默认计算属性不能直接被修改除非设置计算属性的 setter
    allChecked: {
      get() {
        return this.productInCartList.every(item => item.checked)
      },
      //当你的 allChecked 计算属性发生变化时,这个变化并不是由 this.productInCartList 引起的，就会触发 set 函数。
      //  newValue 就是被修改之后的新的计算属性的值
      //  当将计算属性设置成 v-model 时,点击全选按钮时就没有修改 this.productInCartList 而是直接修改了 allChecked 计算属性，所以导致 set 触发。而 newValue 获取到的就是新的 allChecked 的值。然后通过父组件传递过来的方法直接修改  this.productInCartList
      set(newValue) {
        this.$emit("changeAllCheck", newValue)
      }
    }
  },
  methods: {
    handleAllCheck(event) {
      this.$emit("changeAllCheck", event.target.checked)
    }
  }
}

// const arr = [
//   { price: 1000, count: 2 },
//   { price: 10120, count: 2 },
//   { price: 1300, count: 2 }
// ]
// let res = 0
// arr.forEach(item => {
//   res += item.price * item.count
// })
// window.console.log(res)
// 遇到数组的求和一般使用 reduce 方法,或者其它方式实现不了的都可以使用 reduce
// reduce 方法接收两个参数 1. 函数 2.最终结果的初始值(该方法返回值的初始值)
// 函数内的参数 1.最终结果  2.数组内的一项  3. 数组内的一项对应的索引值  4.原数组
// 函数必须返回一个值 当作下一次的最终的结果   每一次的 res 都是相当于前一次的返回值 第一次除外
// const res = arr.reduce((res, item) => (res += item.price * item.count), 0)
// window.console.log(res)
</script>

<style>
.shopping-cart {
  width: 80%;
  margin: 50px auto;
}
.shopping-cart .item-product {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  align-items: center;
}
.shopping-cart .item-product img {
  width: 120px;
}
.shopping-cart .item-product p {
  margin: 0;
  width: 200px;
}
.shopping-cart .item-product .price {
  margin: 0 20px;
}
.shopping-cart .item-product .count {
  display: flex;
  align-items: flex-start;
}
.shopping-cart .item-product .count input {
  width: 100px;
  margin: 0 10px;
  text-align: center;
}
</style>
