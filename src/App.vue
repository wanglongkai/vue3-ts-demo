<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';
import HeaderW from '@/components/Header/index.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
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
    <SvgIcon icon-name="crmico-xiangmuguanli" />
  </h1>
</template>

<style scoped lang="scss">
.title {
  color: red;
}
</style>
