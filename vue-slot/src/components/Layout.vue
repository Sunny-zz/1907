<template>
  <div class="container">
    <header>
      <!-- 我们希望把页头放这里 -->
      <slot name="header"></slot>
    </header>
    <section>
      <!-- 我们希望把主要内容放这里 -->
      <slot></slot>
    </section>
    <footer>
      <!-- 我们希望把页脚放这里 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "layout"
};
</script>

<style>
</style>