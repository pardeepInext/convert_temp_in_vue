import { createWebHistory, createRouter } from 'vue-router';
import AdminRoutes from './adminroutes';
let base = document.querySelector('meta[name="asset"]').content;
import  Home from '../views/Home';
import Blogs  from '../views/Blogs'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Home',
            layout: 'default',
        },
        component: Home,
    },
    {
        path: '/properties',
        name: 'properties',
        meta: {
            title: 'Properties',
            layout: 'default',

        },
        component: () => import('../views/Property')
    },
    {
        path: '/property/:id',
        name: 'property',
        meta: {
            title: 'Property',
            layout: 'default',
        },
        component: () => import('../views/ProperyDetails')
    },
    {
        path: '/property-submit',
        name: 'property-submit',
        meta: {
            title: 'PropertySubmit',
            layout: 'default',
            guard: 'authuser'
        },
        component: () => import('../views/SubmitProperty'),
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: 'About',
            layout: 'default',
        },
        component: () => import('../views/About')
    },
    {
        path: '/blogs',
        name: 'blogs',
        meta: {
            title: 'Blogs',
            layout: 'default',
        },
        component: Blogs
    },
    {
        path: '/blog/:id',
        name: 'blog',
        meta: {
            title: 'Blog',
            layout: 'default',
        },
        component: () => import('../views/Blog')
    },
    {
        path: '/contactus',
        name: 'contactus',
        meta: {
            title: 'Contact Us',
            layout: 'default',
        },
        component: () => import('../views/ContactUs')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Sign In',
            guard: 'guest',
            layout: 'default',
        },
        component: () => import('../views/Login')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: 'Sign Up',
            guard: 'guest',
            layout: 'default',
        },
        component: () => import('../views/Register')
    },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        meta: {
            title: 'Forgot Password',
            guard: 'guest',
            layout: 'default',
        },
        component: () => import('../views/ForgotPassword')

    },
    {
        path: '/user/:id',
        name: 'sendvarificationlink',
        meta: {
            title: 'User',
            layout: 'default',
        },
        component: () => import('../views/404')

    },
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        meta: {
            title: 'Not Found',
            layout: 'default',
        },
        component: () => import('../views/404')
    },
    {
        path: '/chat',
        name: 'chat',
        meta: {
            title: 'Chat',
            layout: 'default',
        },
        component: () => import('../views/Chat')
    }

]


const Router = createRouter({
    base: base,
    history: createWebHistory(),
    routes: routes.concat(AdminRoutes),
});

Router.beforeEach((to, from, next) => {
    if (localStorage.getItem('token')) {
        if (to.matched.some(route => route.meta.guard === 'guest')) next({ name: 'home' })
        else next();
    }else{
        if (to.matched.some(route => route.meta.guard == 'authuser')){
           next({name:'login'})   
        } 
    }
    next();
})



export default Router;