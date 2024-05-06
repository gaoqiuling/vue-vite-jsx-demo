import { createApp } from 'vue'

import Cookies from 'js-cookie';
import './style.css'
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'; // 中文语言
import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
//挂载element-plus ICON
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
    locale: locale,
    size: Cookies.get('size') || 'medium'
  });

app.mount('#app')
