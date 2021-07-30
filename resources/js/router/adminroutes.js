const AdminRoutes = [
    {
        path: '/dashboard',
        name: 'chat',
        meta: {
            title: 'Dashboard',
            layout:'admin',
        },
        component: () => import('../views/admin/Index')
    }
];



export default AdminRoutes;