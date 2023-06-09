<script setup lang='ts'>
import { ref } from 'vue';
import Model from './model.vue';
const visible = ref(false);
const closeModal = () => {
  visible.value = false;
}
</script>

<template>
  <h1>Teleport 内置组件</h1>
  <p>
    <span style="color: red;">有一个小知识点：</span>
    元素祖先的 transform、perspective、filter 或 backdrop-filter 属性非 none 时，position: fixed的容器由视口改为该祖先。
  </p>
  <ElButton @click="visible=true">打开模态框</ElButton>
  <Teleport to="body">
    <Model :visible="visible" @close-modal="closeModal" />
  </Teleport>
</template>

<style lang="scss" scoped>
  
</style>