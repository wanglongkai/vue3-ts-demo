import { createRouter, createWebHistory } from 'vue-router';


export const routes = [
  {
    path: '/',
    name: 'svgicon',
    title: 'SVGicon',
    component: () => import('@/views/svgicon/index.vue')
  },
  {
    path: '/directive',
    name: 'directive',
    title: '自定义指令',
    component: () => import('@/views/customDirective/index.vue')
  },
  {
    path: '/mock',
    name: 'mock',
    title: 'mock及.env',
    component: () => import('@/views/mock/index.vue')
  },
  {
    path: '/cursive',
    name: 'cursive',
    title: '递归组件',
    component: () => import('@/views/cursiveComponent/index.vue')
  },
  {
    path: '/customref',
    name: 'customref',
    title: 'customRef',
    component: () => import('@/views/customRef/index.vue')
  },
  {
    path: '/mitt',
    name: 'mitt',
    title: 'mitt',
    component: () => import('@/views/mitt/index.vue')
  },
  {
    path: '/hooks',
    name: 'hooks',
    title: '组合式函数',
    component: () => import('@/views/hooks/index.vue')
  },
  {
    path: '/echarts',
    name: 'echarts',
    title: 'echarts图表',
    component: () => import('@/views/echarts/index.vue')
  },
  {
    path: '/store',
    name: 'store',
    title: 'store状态管理',
    component: () => import('@/views/store/index.vue')
  },
  {
    path: '/form',
    name: 'form',
    title: 'elemnt表单',
    component: () => import('@/views/form/index.vue')
  },
  {
    path: '/vmodel',
    name: 'vmodel',
    title: 'v-modle',
    component: () => import('@/views/vmodel/index.vue')
  },
  {
    path: '/teleport',
    name: 'teleport',
    title: '传送门',
    component: () => import('@/views/teleport/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;