<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import HeaderW from '@/components/Header/index.vue';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { Edit, Loading } from '@element-plus/icons-vue';
import piao from '@/assets/piao.jpeg';
import TreeComponent from '@/components/TreeComponent/TreeComponent.vue';
import { forEach } from 'lodash';
onMounted(() => {
  axios.get("/api/posts").then(res => {
    console.log(res, 7);
    console.log(import.meta.env.VITE_TEST, 11);
  })
})
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


forEach({ 'a': 1, 'b': 2 }, function (value: number, key) {
  console.log(key, value);
});

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
    <TreeComponent :data="treedData" />
  </h1>
</template>

<style scoped lang="scss">
.title {
  color: red;
  user-select: none;
  width: clamp(100px, 30%, 300px);
}

.icons {
  width: 30px;
  height: 30px;
}
</style>
