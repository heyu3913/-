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
import { ref, computed ,watchEffect} from 'vue'
const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})
function useDouble(count) {
  const doubleCount =ref(0)
  watchEffect(() => {
    console.log('watchEffect')
    doubleCount.value = count * 2
  })
  return doubleCount
}
const doubleCount = useDouble(props.count)

</script>

<style scoped>

</style>
