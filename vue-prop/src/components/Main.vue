<template>
  <section class="main">
    <h2>主体</h2>
    <Btn />

  </section>
</template>

<script>
import Btn from "./Btn";
export default {
  name: "maincontent",
  components: {
    Btn
  }
};
</script>

<style>
.main {
  width: 100%;
  height: 500px;
  background-color: #ccc;
}
</style>