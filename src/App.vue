<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';
import HeaderW from '@/components/Header/index.vue'
onMounted(() => {
  axios.get("/api/user/getuserinfo").then(res => {
    console.log(res, 7)
  })
})
</script>

<template>
  <h1 class="title">
    hello vue3
    <HeaderW />
  </h1>
</template>

<style scoped lang="scss"></style>
