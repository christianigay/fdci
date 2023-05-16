export default[
    {
        path:'/',
        component: () => import('@/pages/dashboard/index.vue'),
        name:'home',
        meta: {layout: 'LayoutDefault', requiresAuth: true}
    },
    {
        path:'/dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
        name:'dashboard',
        meta: {layout: 'LayoutDefault', requiresAuth: true}
    },
    {
        path:'/thank-you',
        component: () => import('@/pages/dashboard/thank_you.vue'),
        name:'thank_you',
        meta: {layout: 'LayoutDefault', requiresAuth: true}
    },
    
]