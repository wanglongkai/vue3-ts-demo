<script setup lang='ts'>
import { onBeforeUnmount, onUnmounted } from 'vue';

onBeforeUnmount(() => {
  console.log(`子->output->beforeUmount`)
})
onUnmounted(() => {
  console.log('子->output->onUnounted')
})
</script>

<template>
  <div>这是子组件3<input type="text" /></div>
</template>

<style lang="scss" scoped>
  
</style>