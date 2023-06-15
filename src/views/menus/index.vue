<template>
  <h1>全部页面级组件</h1>
  <el-select class="w-full" filterable v-model="selectedPath" placeholder="请选择组件路径">
    <el-option v-for="path in viewPagePaths" :key="path" :value="path" :label="path" />
  </el-select>
</template>

<script lang='ts' setup>
import useAppStore from '@/stores/appStore';
import { ref } from 'vue';
const selectedPath = ref('');
const { viewPagePaths } = useAppStore();
</script>

<style scoped lang='scss'>
</style>