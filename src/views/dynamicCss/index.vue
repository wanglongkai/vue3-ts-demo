<script setup lang="ts">
import Tpp from "./jsxComponent"
import { ref } from "vue"
const theme = ref("red")
const colors = ["blue", "yellow", "red", "green"]
setInterval(() => {
  theme.value = colors[Math.floor(Math.random() * 4)]
}, 1000)
</script>

<template>
  <p class="dycolor">hello</p>
  <hr />
  <p class="text-red mb-20" style="width: 100px;">tsx组件</p>
  <Tpp />
</template>

<style scoped>
.dycolor {
  color: v-bind(theme); /*动态绑定css */
}
</style>

