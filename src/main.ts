import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import './lib/iconfont.js' // 阿里字体图标文件 symbol格式
import { createPinia } from 'pinia'
import 'virtual:uno.css'

import router from './router';
const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
