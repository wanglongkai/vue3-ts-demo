<script setup lang='ts'>
import { ref } from 'vue';
import { postUserInfo } from '@/api/userApi';
const envConstant = ref(import.meta.env.VITE_TEST)
const list = ref<number[]>([]);

postUserInfo({name: 'wlk'}).then(res => {
  list.value = res.data;
})
</script>

<template>
  <h1 class="mb-15px">Mock及.env环境变量</h1>
  <p class="mb-15px">
    环境变量: import.meta.env.VITE_TEST-->{{ envConstant }}
  </p>
  <li v-for="item in list" :key="item">{{ item }}</li>
</template>