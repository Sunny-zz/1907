<template>
  <div>
    <h1 class="title">hello world</h1>
    <!-- class 绑定 -->
    <!-- <div :class="`circle ${isActive ? 'active-bg' : ''}`"></div> -->
    <!-- 对象下的属性的属性名多个单词需要加引号 -->
    <div :class="{ 'active-bg': isActive, circle: true }"></div>
    <!-- <div :class="['circle', isActive ? 'active-bg' : '']"></div> -->
    <!-- style 绑定 -->
    <p>
      i have a
      <!-- <span
        :style="
          `color: ${
            highLight === 'one' ? '#00b3d4' : highLight === 'two' ? 'red' : ''
          }`
        "
      >
        dream
      </span> -->
      <span
        :style="{
          color:
            highLight === 'one' ? '#00b3d4' : highLight === 'two' ? 'red' : ''
        }"
      >
        dream
      </span>
      ,i want aapple computer.
    </p>
    <ul>
      <li v-for="(item, index) in numArr" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "helloworld",
  data() {
    return {
      isActive: true,
      highLight: "one",
      numArr: [1, 3, 3, 4]
    }
  }
}
</script>

<style>
h1 {
  color: red;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: teal;
}
.active-bg {
  background-color: hotpink;
}
</style>
