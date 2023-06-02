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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;