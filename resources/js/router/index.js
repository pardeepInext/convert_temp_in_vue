import {createWebHistory, createRouter} from 'vue-router';
let base = document.querySelector('meta[name="asset"]').content;
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
    },
    {
        path: '/property-submit',
        name: 'property-submit',
        component: () => import('../views/SubmitProperty'),
    },
    {
        path:'/about',
        name:'about',
        component: () => import('../views/About')
    },
    {
        path:'/blogs',
        name:'blogs',
        component: () => import('../views/Blogs')
    },
    {
        path:'/blog/:id',
        name:'blog',
        component: () => import('../views/Blog')
    }
]


const Router =  createRouter({
    base: base,
    history: createWebHistory(),
    routes,
})

export default Router;