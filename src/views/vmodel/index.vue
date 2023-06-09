<script setup lang='ts'>
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';
const count = ref('');

</script>

<template>
  {{ count }}
  <CustomInput v-model:count="count" />
</template>

<style lang="scss" scoped>
  
</style>