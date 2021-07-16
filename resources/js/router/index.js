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
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Sign In',
            guard: 'guest',
        },
        component: () => import('../views/Login')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: 'Sign Up',
            guard: 'guest',
        },
        component: () => import('../views/Register')
    },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        meta: {
            title: 'Forgot Password',
            guard: 'guest',
        },
        component: () => import('../views/ForgotPassword')

    },
    {
        path: '/user/:id',
        name: 'sendvarificationlink',
        meta: {
            title: 'User',
        },
        component: () => import('../views/404')

    },
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        meta: {
            title: 'Not Found',
        },
        component: () => import('../views/404')
    }

]


const Router = createRouter({
    base: base,
    history: createWebHistory(),
    routes,
});

Router.beforeEach((to, from, next) => {
    if (localStorage.getItem('token')) {
        if (to.matched.some(route => route.meta.guard === 'guest')) next({ name: 'home' })
        else next();
    }
    next();
})



export default Router;