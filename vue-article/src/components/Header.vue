<template>
  <header>
    <div class="inner">
      <img
        src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
        alt=""
        class="logo"
      />
      <div class="tabs">
        <router-link active-class="active" exact tag="span" to="/"
          >首页</router-link
        >
        <router-link active-class="active" tag="span" to="/pins"
          >沸点</router-link
        >
        <router-link active-class="active" tag="span" to="/topics"
          >话题</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "top"
}
</script>

<style>
header {
  background-color: #fff;
  width: 100%;
}
header .inner {
  width: 70%;
  margin: 0 auto;
  display: flex;
  height: 80px;
  align-items: center;
}
header .tabs {
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
}
header .tabs span {
  cursor: pointer;
  color: #000;
}
header .tabs span.active {
  color: #007fff;
}
</style>
