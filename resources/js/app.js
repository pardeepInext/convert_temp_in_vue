import { createApp, Vue } from 'vue'
import App from './App.vue';
import Router from './router/index';
import store from './store/index';
import { Toast } from 'bootstrap';
import { createMetaManager } from 'vue-meta';

const app = createApp(App)
     .use(Router)
     .use(store)
     .use(createMetaManager())
     .mount('#app');


