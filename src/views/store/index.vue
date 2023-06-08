<template>
  {{ name }} 
  <el-button @click="changeName">changeName</el-button>
  <el-button @click="changeRemoteName">changeRemoteName</el-button>
</template>

<script lang='ts' setup>
  import useUserStore from '@/stores';
  import { storeToRefs } from 'pinia';
  const { name } = storeToRefs(useUserStore());
  const { getUser }  = useUserStore(); // action需要直接解构，而state需要storeToRefs解构
  const changeName = () => {
    name.value = 'wanglongkai'
  }
  const changeRemoteName = () => {
    getUser();
  }
</script>

<style scoped lang='scss'>
</style>