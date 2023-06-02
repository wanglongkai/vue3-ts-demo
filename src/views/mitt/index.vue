<template>
  <h1>Mitt-中央事件总线</h1>
  <el-button @click="handle">触发mitt</el-button>
</template>
  
<script setup lang='ts'>
import $Bus from "@/utils/mitt";

// 订阅事件
$Bus.on('foo', data => console.log(`output->data`, data));

const handle = () => {
  // 发布事件
  $Bus.emit('foo', 'wanglk') 
}
</script>
  
<style></style>