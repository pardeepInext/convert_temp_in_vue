import { createWebHistory, createRouter } from 'vue-router';
let base = document.querySelector('meta[name="asset"]').content;

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Home'
        },
        component: () => import('../views/Home')
    },
    {
        path: '/properties',
        name: 'properties',
        meta: {
            title: 'Properties',
            
        },
        component: () => import('../views/Property')
    },
    {
        path: '/property/:id',
        name: 'property',
        meta: {
            title: 'Property',
            
        },
        component: () => import('../views/ProperyDetails')
    },
    {
        path: '/property-submit',
        name: 'property-submit',
        meta: {
            title: 'PropertySubmit',
        },
        component: () => import('../views/SubmitProperty'),
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: 'About',
        },
        component: () => import('../views/About')
    },
    {
        path: '/blogs',
        name: 'blogs',
        meta: {
            title: 'Blogs',
        },
        component: () => import('../views/Blogs')
    },
    {
        path: '/blog/:id',
        name: 'blog',
        component: () => import('../views/Blog')
    },
    {
        path: '/contactus',
        name: 'contactus',
        meta: {
            title: 'Contact Us', 
        },
        component: () => import('../views/ContactUs')
    },

]


const Router = createRouter({
    base: base,
    history: createWebHistory(),
    routes,
});




export default Router;