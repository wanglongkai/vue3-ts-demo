<script setup lang="ts">
import { ref } from 'vue';
import TreeComponent from '@/components/TreeComponent/TreeComponent.vue';
interface ITreeData {
  title: string,
  key: number,
  children?: ITreeData[]
}
const treedData = ref<ITreeData[]>([
  {
    title: '叶子1',
    key: 1,
    children: [
      { title: '叶子1-1', key: 4 }
    ]
  },
  {
    title: '叶子2',
    key: 2
  },
  {
    title: '叶子3',
    key: 2,
    children: [
      { title: '叶子3-1', key: 5 },
      { title: '叶子3-2', key: 5 }
    ]
  },
])
</script>

<template>
  <h1>递归组件使用</h1>
  <div class="color">
    <TreeComponent :data="treedData" />
  </div>
</template>

<style scoped lang="scss">
.color {
  color: red;
  user-select: none;
  width: clamp(100px, 30%, 300px);
}
</style>
