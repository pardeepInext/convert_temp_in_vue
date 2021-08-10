const AdminRoutes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            title: 'Dashboard',
            layout: 'admin',
            guard: 'authuser',
            role: '3',
        },
        component: () => import('../views/admin/Index')
    },
    {
        path: '/propertylist',
        name: 'propertylist',
        meta: {
            title: 'Property',
            layout: 'admin',
            guard: 'authuser',
            role: '3',
        },
        component: () => import('../views/admin/Property')
    },
    {
        path: '/newslatter',
        name: 'newslatter',
        meta: {
            title: 'Newsletter',
            layout: 'admin',
            guard: 'authuser',
            role: '3',
        },
        component: () => import('../views/admin/NewsLatter')
    },
    {
        path: '/users',
        name: 'users',
        meta: {
            title: 'Users',
            layout: 'admin',
            guard: 'authuser',
            role: '3',
        },
        component: () => import('../views/admin/User')
    },
    {
        path: '/add/user',
        name: 'users-add',
        meta: {
            title: 'Add',
            layout: 'admin',
            guard: 'authuser',
            role: '3',
        },
        component: () => import('../views/admin/AddUser')
    },

    {
        path: '/contactmessage',
        name: 'contactmessage',
        meta: {
            title: 'Contact',
            layout: 'admin',
            guard: 'authuser',
            role: '3',
        },
        component: () => import('../views/admin/ContactMessage')
    }
];



export default AdminRoutes;