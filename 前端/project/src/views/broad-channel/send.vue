<template>
  <div>
    <button @click="useSendMsg">发送</button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {sendMsg} from "@/utils/index";

const person = ref({
  name: 'zhangsan',
  age: 18
})
const useSendMsg = () => {
  console.log('sendMsg')

  sendMsg('channel', {...person.value}) // 这个对象需要clone过去，因为标签页内存隔离，无法用一个内存地址。只能通过clone的方式。
    // 代理对象无法被clone,所以用{...person.value}变成普通对象
}
</script>

<style scoped>

</style>
