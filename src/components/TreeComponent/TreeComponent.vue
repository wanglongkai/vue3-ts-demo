<script setup lang='ts'>
interface ITreeData {
  title: string,
  key: number,
  children?: ITreeData[]
}
defineProps<{
  data: ITreeData[]
}>()

</script>

<template>
  <ul>
    <li v-for="item in data" :key="item.key">
      {{ item.title }}
      <TreeComponent v-if="item.children" :data="item.children" />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>