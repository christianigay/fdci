export default[
    {
        path:'/contact/list',
        component: () => import('@/pages/contact/list.vue'),
        name:'contact_list',
        meta: {layout: 'LayoutDefault', requiresAuth: true}
    },
    {
        path:'/contact/add',
        component: () => import('@/pages/contact/add.vue'),
        name:'contact_add',
        meta: {layout: 'LayoutDefault', requiresAuth: true}
    },
    {
        path:'/contact/edit/:id',
        component: () => import('@/pages/contact/edit.vue'),
        name:'contact_edit',
        meta: {layout: 'LayoutDefault', requiresAuth: true}
    },
    
]