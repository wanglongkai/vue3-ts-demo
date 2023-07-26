import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import './lib/iconfont.js' // 阿里字体图标文件 symbol格式
import { createPinia } from 'pinia'
import 'virtual:uno.css'

// import 'element-plus/dist/index.css'

import router from './router';
const pinia = createPinia();

// 显示md文件需要---------------
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
// -------------------------------

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use


const app = createApp(App);
app.use(VMdPreview);
app.use(mavonEditor);
app.use(router);
app.use(pinia);
app.mount('#app');
