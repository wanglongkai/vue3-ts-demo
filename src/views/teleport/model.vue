<script setup lang='ts'>
defineProps<{visible: boolean}>();
const emit = defineEmits<{
  (e: "closeModal"): void
}>();
</script>

<template>
  <div v-show="visible" class="modal">
    <p>这是模态框的内容</p>
    <ElButton @click="emit('closeModal')">关闭模态框</ElButton>
  </div>
</template>

<style lang="scss" scoped>
  .modal{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: beige;
    z-index: 100;
  }
</style>