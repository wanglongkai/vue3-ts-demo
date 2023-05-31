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
  <p v-debounce-click:200="onClick" class="color">
    this is header page;
  </p>
</template>

<style lang="scss" scoped>
.color {
  color: $themecolor;
}
</style>