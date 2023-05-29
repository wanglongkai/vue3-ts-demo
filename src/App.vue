<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';
import HeaderW from '@/components/Header/index.vue';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { Edit, Loading } from '@element-plus/icons-vue';
import piao from '@/assets/piao.jpeg';
onMounted(() => {
  axios.get("/api/posts").then(res => {
    console.log(res, 7);
    console.log(import.meta.env.VITE_TEST, 11);
  })
})
</script>

<template>
  <h1 class="title">
    <img :src="piao" alt="">
    hello vue3
    <el-button type="primary">Primary</el-button>
    <el-pagination layout="prev, pager, next" :total="1000" />
    <Edit class="icons" />
    <el-icon class="is-loading">
      <Loading />
    </el-icon>
    <HeaderW />
    <SvgIcon icon-name="crmico-xiangmuguanli" />
  </h1>
</template>

<style scoped lang="scss">
.title {
  color: red;
}

.icons {
  width: 30px;
  height: 30px;
}
</style>
