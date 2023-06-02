<script setup lang='ts'>
import { routes } from '@/router'
import { useRouter } from 'vue-router'
const router = useRouter();
const handleItemClick = (item: any) => {
  router.replace(item.index);
}
</script>

<template>
  <div class="mainbox">
    <div class="left-menu">
      <el-menu 
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
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
    </div>
    <!-- 一级路由：框架入口 -->
    <div class="right-content">
      <router-view v-slot="{Component}">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainbox {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.left-menu {
  width: 200px;
  .el-menu{
    height: 100%;
  }
}

.right-content {
  flex: 1 1 auto;
  padding: 15px;
  overflow: auto;
}
</style>