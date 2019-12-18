<template>
  <div class="product">
    <img :src="product.productImg" alt="" />
    <p>{{ product.productName }}</p>
    <span>￥{{ product.price.toFixed(2) }}</span>
    <button @click="$emit('addToCart', product)">加入购物车</button>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["product"]
}
</script>

<style>
.product {
  width: 200px;
  padding: 20px;
  border: 1px dashed #cacaca;
  margin: -1px 0 0 -1px;
  text-align: center;
}
.product img {
  width: 100%;
}
.product p {
  height: 36px;
  line-height: 18px;
  margin: 5px 0;
  overflow: hidden;
  font-size: 14px;
}
.product span {
  font-size: 14px;
  color: #d91f20;
}
.product button {
  display: block;
  height: 28px;
  line-height: 28px;
  padding: 0 20px;
  border: 1px solid #999;
  color: #666;
  text-align: center;
  border-radius: 3px;
  outline: none;
  margin: 0 auto;
  font-size: 14px;
  background-color: #fff;
}
.product button:hover {
  border-color: #e2231a;
  background: #e2231a;
  color: #fff;
}
</style>
