<template>
  <div>
    <div>监听中.....</div>
    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {listenMsg,stopListeningMsg,closeListeningMsg} from '@/utils/index'
import {onMounted, onUnmounted, ref} from 'vue'
console.log('测试git')
const centerDialogVisible = ref(false)
listenMsg((info)=>{
  console.log(info)
  centerDialogVisible.value = true
})
onUnmounted(()=>{
  closeListeningMsg()
})
</script>

<style scoped>

</style>
