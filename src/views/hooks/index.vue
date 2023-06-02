<template>
  <h1>组合函数使用-hooks</h1>
  <p style="margin-bottom: 15px">鼠标位置useMouse：{{ x }}---{{ y }}</p>
  <p>异步组合useList:</p>
  <li v-for="item in list" :key="item.id">{{ item.title }}</li>
</template>
  
<script setup lang='ts'>
  import useList from './useList';
  import useMouse from './useMouse';

  const list = useList('/api/posts');
  const { x, y } = useMouse();
</script>
  
<style lang="scss" scoped>
  h1{
    margin-bottom: 15px;
  }
</style>