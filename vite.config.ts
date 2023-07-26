import path from 'path';
import { viteMockServe } from "vite-plugin-mock";
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import PostCssEnv from 'postcss-preset-env';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite'
import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    viteMockServe({
      mockPath: "./mock",//设置mock文件存储目录
      localEnabled: true,//设置是否启用本地mock文件
      logger: true,//是否在控制台显示请求日志
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({})
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
        additionalData: `
          @use "./src/styles/variables.scss" as *;
          @use "element-plus/theme-chalk/src/mixins/mixins" as *;
        `,
      },
    },
    postcss: {
      plugins: [
        PostCssEnv()
      ]
    },
    devSourcemap: true, //是否开启css开发时sourcemap
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash'],
          element_plus: ['element-plus']
        }
      }
    }
  }
})
