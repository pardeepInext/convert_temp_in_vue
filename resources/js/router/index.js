import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
    },
    {
        path: '/property',
        name: 'property',
        component: () => import('../views/Property')
    }
]


const Router =  createRouter({
    history: createWebHistory(),
    routes,
})

export default Router;