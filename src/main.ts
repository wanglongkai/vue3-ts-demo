import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import './lib/iconfont.js' // 阿里字体图标文件 symbol格式

import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
