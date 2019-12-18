<template>
  <div class="product-list">
    <Product
      v-for="product in productList"
      :key="product.id"
      :product="product"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import Product from "./Product"
export default {
  name: "product-list",
  props: ["addToCart"],
  data() {
    return {
      productList: [
        {
          id: "123123",
          productName:
            "费列罗（Ferrero Rocher）榛果威化糖果巧克力 婚庆送礼喜糖表白 96粒婚宴装1200g",
          price: 100,
          productImg:
            "https://img13.360buyimg.com/n4/s160x160_jfs/t17368/363/2506748519/153940/80319d64/5af95f1eN3d32bd81.jpg",
          inventory: 100
        },
        {
          id: "1123",
          productName:
            "戴尔灵越5000 14英寸英特尔酷睿i5高性能轻薄窄边框笔记本电脑(十代i5-1035G1 8G 512G MX230 2G)银",
          price: 900,
          productImg:
            "https://img12.360buyimg.com/n4/s160x160_jfs/t1/51471/26/13576/303790/5da825d9E9bed2275/a471bb5bb6c6efea.jpg",
          inventory: 40
        },

        {
          id: "11223",
          productName:
            "惠普(HP)暗影精灵5 15.6英寸高色域游戏笔记本电脑(i5-9300H 8G 512GSSD GTX1660Ti 6G独显)",
          price: 7499,
          productImg:
            "https://img14.360buyimg.com/n4/s160x160_jfs/t10516/138/2705796330/247522/af6d5f81/5cd54594Ndddd0dbc.jpg",
          inventory: 100
        },

        {
          id: "1112d223",
          productName:
            "科沃斯（Ecovacs）地宝DE53扫地机器人扫拖一体全自动智能规划路线家用吸尘器拖地机",
          price: 1299,
          productImg:
            "https://img12.360buyimg.com/n4/s160x160_jfs/t1/55235/27/15919/127976/5dce4d8aE9251331a/f226c1ae2d58ab7f.jpg",
          inventory: 100
        }
      ]
    }
  },
  components: {
    Product
  }
}
</script>

<style>
.product-list {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
