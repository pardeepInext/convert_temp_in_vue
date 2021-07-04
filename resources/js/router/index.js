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
        path: '/property',
        name: 'property',
        meta: {
            title: 'Property',
            breadcrumb: {
                name: "Property",
                img: "breadcrumb-bg.jpg",
            }
        },
        component: () => import('../views/Property')
    },
    {
        path: '/property-submit',
        name: 'property-submit',
        meta: {
            title: 'PropertySubmit',
            breadcrumb: {
                name: "Property",
                img: "breadcrumb-2.jpg",
            }
        },
        component: () => import('../views/SubmitProperty'),
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: 'About',
            breadcrumb: {
                name: "About",
                img: "breadcrumb-bg.jpg",
            }
        },
        component: () => import('../views/About')
    },
    {
        path: '/blogs',
        name: 'blogs',
        meta: {
            title: 'Blogs',
            breadcrumb: {
                name: "Blogs",
                img: "breadcrumb-3.jpg",
            }
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
            breadcrumb: {
                name: "Contact Us",
                img: "breadcrumb-contact-bg.jpg",
            }
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