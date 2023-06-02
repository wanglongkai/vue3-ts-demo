<script setup lang='ts'>
import { ObjectDirective } from 'vue';
// 自定义局部指令，注意命令规则，不然模板中访问不到。自定义全局指令用app.derective()
const vDebounceClick: ObjectDirective = {
  mounted: (el: HTMLElement, binding) => {
    let timer: number;
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(binding.value, Number(binding.arg))
    })
  }
}
function onClick() {
  console.log("Only triggered once when clicked many times quickly")
}
</script>

<template>
  <h1>自定义指令</h1>
  <pre>
    快速点击按钮，200ms内只出发一次事件
  </pre>
  <el-button v-debounce-click:200="onClick" class="color">
    快速点击我！
  </el-button>
</template>

<style lang="scss" scoped>
h1{
  margin-bottom: 15px;
}
.color {
  // 全局变量使用
  color: $themecolor; 
}
</style>