<script setup lang='ts'>
import { useVModel } from '@vueuse/core'
  const props = defineProps<{count: string}>();
  const emit = defineEmits<{
    (e: 'update:count', count: string): void
  }>();

  // :value @input的语法糖
  const count = useVModel(props, 'count', emit)
</script>

<template>
  <input v-model="count" type="text" class="inner" />
</template>

<style lang="scss" scoped>
  .inner{
    position: fixed;
    left: 50%;
    top: 50%;
  }
</style>