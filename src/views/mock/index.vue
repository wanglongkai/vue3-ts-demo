<script setup lang='ts'>
import { onMounted, ref} from 'vue';
import axios from 'axios';
const envConstant = ref(import.meta.env.VITE_TEST)
const list = ref<{id: number, title: string}[]>([]);
onMounted(() => {
  axios.get("/api/posts").then(res => {
    list.value = res.data;
  })
})
</script>

<template>
  <h1>Mock及.env环境变量</h1>
  <p>环境变量: import.meta.env.VITE_TEST-->{{ envConstant }}</p>
  <li v-for="item in list" :key="item.id">{{ item.title }}</li>
</template>

<style lang="scss" scoped>
  h1, p{
    margin-bottom: 15px;
  }
</style>