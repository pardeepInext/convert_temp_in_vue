import { createApp,Vue } from 'vue'
import App from './App.vue';
import Router from './router/index';
import store from './store/index';
import { Toast } from 'bootstrap';
import Dropdown from 'vue-simple-search-dropdown';
const app = createApp(App)
.use(Router)
.use(store)
.use(Dropdown)
.mount('#app');

