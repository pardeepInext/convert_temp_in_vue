const AdminRoutes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            title: 'Dashboard',
            layout:'admin',
        },
        component: () => import('../views/admin/Index')
    },
    {
        path: '/propertylist',
        name: 'propertylist',
        meta: {
            title: 'Property',
            layout:'admin',
        },
        component: () => import('../views/admin/Property')
    },
    {
        path: '/newslatter',
        name: 'newslatter',
        meta: {
            title: 'Newsletter',
            layout:'admin',
        },
        component: () => import('../views/admin/NewsLatter')
    },
    {
        path: '/users',
        name: 'users',
        meta: {
            title: 'Users',
            layout:'admin',
        },
        component: () => import('../views/admin/User')
    },
    {
        path: '/contactmessage',
        name: 'contactmessage',
        meta: {
            title: 'Contact',
            layout:'admin',
        },
        component: () => import('../views/admin/ContactMessage')
    }
];



export default AdminRoutes;