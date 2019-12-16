<template>
  <a
    class="card-wrap"
    href="www.digitalcity.com"
  >
    <div class="card">
      <img
        :src="imgSrc"
        alt=""
      >
      <h3>{{title || '默认标题'}}</h3>
      <p>{{url||'www.xxx.com'}}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "card",
  // props: {
  //   title: {
  //     type: String,
  //     default: "默认标题"
  //   }
  // }
  props: ["title", "url", "imgSrc"]
};
</script>

<style>
.card-wrap {
  display: block;
  width: 240px;
}
.card {
  width: 240px;
  height: 400px;
  border: 1px solid #000;
}
.card img {
  width: 100%;
  display: block;
}
.card h3 {
  margin: 10px 0px 8px 30px;
}
.card p {
  margin-left: 30px;
}
</style>