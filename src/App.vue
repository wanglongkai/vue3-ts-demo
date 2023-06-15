<script setup lang='ts'>
import { routes } from '@/router'
import { useRouter } from 'vue-router'
const router = useRouter();
const handleItemClick = (item: any) => {
  router.replace(item.index);
}
</script>

<template>
  <div class="h-100% flex justify-between">
    <el-scrollbar class="bg-#545c64">
      <el-menu 
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="/"
        text-color="#fff"
        class="border-transparent"
      >
        <el-menu-item 
          v-for="route in routes" 
          :key="route.path" 
          :index="route.path"
          @click="handleItemClick"
        >
          <span>{{ route.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <!-- 一级路由：框架入口 -->
    <div class="flex-auto p-15px overflow-auto">
      <router-view v-slot="{Component}">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>