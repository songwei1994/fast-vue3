import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import piniaStore from './store';
import './index.css';
// 支持SVG
import 'virtual:svg-icons-register';

const app = createApp(App)
import * as echarts from 'echarts';
app.config.globalProperties.$echarts = echarts;

app.use(router).use(piniaStore).mount('#app');
