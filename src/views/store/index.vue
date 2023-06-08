<template>
  {{ name }}--{{ doubleCount }}--{{ count }}
  <el-button @click="changeCount">count++</el-button>
  <el-button @click="changeName">changeName</el-button>
  <el-button @click="changeRemoteName">changeRemoteName</el-button>
</template>

<script lang='ts' setup>
  import useUserStore from '@/stores';
  import { storeToRefs } from 'pinia';
  const { name, doubleCount, count } = storeToRefs(useUserStore());
  const { getUser }  = useUserStore(); // action需要直接解构，而state需要storeToRefs解构
  const changeName = () => {
    name.value = 'wanglongkai'
  }
  const changeRemoteName = () => {
    getUser();
  }
  const changeCount = () => {
    count.value++
  }
</script>

<style scoped lang='scss'>
</style>