const AdminRoutes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            title: 'Dashboard',
            layout:'admin',
        },
        component: () => import('../views/admin/Index')
    }
];



export default AdminRoutes;