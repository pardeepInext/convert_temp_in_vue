import { createApp,Vue } from 'vue'
import App from './App.vue';
import Router from './router/index';
import { Toast } from 'bootstrap';
window.asset = document.querySelector('meta[name="asset"]').content;
const app = createApp(App)
.use(Router)
.mount('#app');

