<template>
  <div class="responsive">
    <h1>responsive</h1>
    <div>传入的值:{{ count }}</div>
    <br>
    <div>doubled:{{doubleCount}}</div>
    <br>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})
const doubleCount =ref(props.count * 2)
</script>

<style scoped>

</style>
