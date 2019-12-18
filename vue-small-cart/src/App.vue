<template>
  <div>
    <h2>简单小购物车</h2>
    <ProductList :addToCart="addToCart" />
    <ShoppingCart
      :productInCartList="productInCartList"
      @add="add"
      @sub="sub"
      @del="del"
    />
  </div>
</template>

<script>
import ProductList from "./components/ProductList"
import ShoppingCart from "./components/ShoppingCart"
export default {
  name: "app",
  components: {
    ProductList,
    ShoppingCart
  },
  data() {
    return {
      productInCartList: []
    }
  },
  methods: {
    addToCart(product) {
      // 看传递过来的商品数据是否之前已经添加到购物车中了   id
      // window.console.log(this.productInCartList, product);
      const productWhich = this.productInCartList.find(
        item => item.id === product.id
      )
      if (productWhich) {
        productWhich.count++
      } else {
        this.productInCartList.push({ ...product, count: 1, checked: true })
      }
    },
    add(id) {
      this.productInCartList.find(item => item.id === id).count++
    },
    sub(id) {
      const product = this.productInCartList.find(item => item.id === id)
      if (product.count > 1) {
        product.count--
      }
    },
    del(id) {
      window.console.log(id)
      this.productInCartList = this.productInCartList.filter(
        item => item.id !== id
      )
    }
  }
}
</script>

<style></style>
