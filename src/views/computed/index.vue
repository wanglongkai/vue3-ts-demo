<script setup lang='ts'>
 import { computed, ref } from 'vue';
 const firstName = ref('john');
 const lastName = ref('sela');

 const fullName = computed({
  get(){
    return `${firstName.value} ${lastName.value}`;
  },
  set(newVal){
    [firstName.value, lastName.value] = newVal.split(" ");
  }
 })
</script>

<template>
  <h1>计算属性</h1>
  fullName -- <input type="text" v-model="fullName">
  <hr>
  firstName -- <input type="text" v-model="firstName" />
  <hr>
  lastName -- <input type="text" v-model="lastName" />
</template>

<style lang="scss" scoped>
  h1{
    margin-bottom: 15px;
  }
  hr{
    margin: 15px 0;
  }
</style>