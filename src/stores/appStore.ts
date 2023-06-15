import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";

const modules = import.meta.glob('@/views/**/*.vue');
const useAppStore = defineStore('app', () => {
  const app = reactive({
    viewPagePaths: Object.keys(modules), // 全部页面组件路径
  })

  return {
    ...toRefs(app)
  }
})

export default useAppStore;