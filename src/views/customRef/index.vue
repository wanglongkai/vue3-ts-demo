<template>
  <h1>customRef-自定义ref</h1>
  <p>使用customRef实现响应式节流</p>
  {{ num }}
  <el-button @click="num++">更新num</el-button>
</template>
  
<script setup lang='ts'>
import { customRef } from 'vue';

const useThrottleRef = (value: any, wait: number) => {
  let isloading = false;
  return customRef((track, trigger) => {
    return {
      get() {
        track(); // 用于在界面渲染值时收集依赖
        return value;
      },
      set(newVal) {
        if(isloading) return;
        isloading = true;
        value = newVal;
        trigger(); // 用于函数更新值时触发界面更新
        setTimeout(() => {
          isloading =false;
        }, wait)
      },
    }
  })
}
const num = useThrottleRef(10, 1000);
</script>
  
<style lang="scss" scoped>
  h1, p{
    margin-bottom: 15px;
  }
</style>