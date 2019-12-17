<template>
  <div>
    <h2>简单小购物车</h2>
    <ProductList />
    <ShoppingCart />
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
  }
}
</script>

<style></style>
