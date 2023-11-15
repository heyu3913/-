<template>
  <div id="app">
    <router-view :count="count"></router-view>
<!--    <button @click="add">增加</button>--> <!-- 验证响应式可以放开 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => {
  count.value++
}
</script>

<style scoped>

</style>
