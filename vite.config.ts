import path from 'path';
import { viteMockServe } from "vite-plugin-mock";
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./mock",//设置mock文件存储目录
      localEnabled: true,//设置是否启用本地mock文件
      logger: true,//是否在控制台显示请求日志
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variables.scss";',
      },
    }
  }
}
