<script setup lang='ts'>
import { shallowRef, defineAsyncComponent, onBeforeUnmount, onUnmounted } from 'vue';
import type {Component } from 'vue';
const Child = defineAsyncComponent(() => import('./child.vue'));
const Child2 = defineAsyncComponent(() => import('./child2.vue'));
const Child3 = defineAsyncComponent(() => import('./child3.vue'));

const showComponent = shallowRef<Component>(Child);
const changeComponnet = (component: Component) => {
  showComponent.value = component
}

onBeforeUnmount(() => {
  console.log(`父->output->beforeUmount`)
})
onUnmounted(() => {
  console.log('父->output->onUnounted')
})
</script>

<template>
  <ElButton @click="changeComponnet(Child)">组件1</ElButton>
  <ElButton @click="changeComponnet(Child2)">组件2</ElButton>
  <ElButton @click="changeComponnet(Child3)">组件3</ElButton>
  <hr>
  <Transition name="fade" mode="out-in">
    <!-- <KeepAlive> -->
      <component :is="showComponent"></component>
    <!-- </KeepAlive> -->
  </Transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>