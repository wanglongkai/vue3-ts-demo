<script setup lang='ts'>
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';
const count = ref('');

</script>

<template>
  {{ count }}
  <div class="outer">
    <CustomInput v-model:count="count" />
  </div>
</template>

<style lang="scss" scoped>
  .outer{
    transform: translateY(50%);
  }
</style>