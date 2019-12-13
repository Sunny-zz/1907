<template>
  <footer>
    <h2>底部</h2>
    <Btn />
  </footer>
</template>

<script>
import Btn from "./Btn";
export default {
  name: "footercontent",
  components: {
    Btn
  }
};
</script>

<style>
footer {
  width: 100%;
  height: 300px;
  background-color: rgb(142, 238, 113);
}
</style>