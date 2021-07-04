import { createApp,Vue } from 'vue'
import App from './App.vue';
import Router from './router/index';
import store from './store/index';
import { Toast } from 'bootstrap';

const app = createApp(App)
.use(Router)
.use(store)
.mount('#app');
    

//adding loader before each route view
Router.beforeEach((to, from, next) => {  
    app.$data.isViewLoading = true;
    next()
})
//desable loader when component is loading
Router.afterEach(() => app.$data.isViewLoading = false)