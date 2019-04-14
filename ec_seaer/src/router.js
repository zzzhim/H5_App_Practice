import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/Home',
            name: 'Home',
            component: () => import('@/views/Home')
        },
        {
            path: '/Register',
            name: 'Register',
            component: () => import('@/views/Register')
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('@/views/Login')
        },
        {
            path: '/ProductsCategories',
            name: 'ProductsCategories',
            component: () => import('@/views/ProductsCategories')
        },
        {
            path: '/PersonalCenter',
            name: 'PersonalCenter',
            component: () => import('@/views/PersonalCenter')
        },
        {
            path: '/Product',
            name: 'Product',
            component: () => import('@/views/Product'),
            children: [
                {
                    path: 'ProductsList',
                    name: 'ProductsList',
                    component: () => import('@/views/Product/ProductsList')
                },
                {
                    path: 'ProductDetail',
                    name: 'ProductDetail',
                    component: () => import('@/views/Product/ProductDetail')
                }
            ]
        },
        {
            path: '/Inquiry',
            name: 'Inquiry',
            component: () => import('@/views/Product'),
            children: [
                {
                    path: 'Inquiry',
                    component: () => import('@/views/Inquiry/Inquiry')
                },
                {
                    path: 'Success',
                    component: () => import('@/views/Inquiry/Success')
                }
            ]
        },
        {
            path: '/ChangePassword',
            name: 'ChangePassword',
            component: () => import('@/views/ChangePassword')
        },
        {
            path: '/Feedback',
            name: 'Feedback',
            component: () => import('@/views/Feedback'),
            children: [
                {
                    path: 'Feedback',
                    component: () => import('@/views/Feedback/Feedback')
                },
                {
                    path: 'Success',
                    component: () => import('@/views/Feedback/Success')
                }
            ]
        },
        {
            path: '/ForgetPassword',
            name: 'ForgetPassword',
            component: () => import('@/views/ForgetPassword')
        },
        {
            path: '/Article',
            name: 'Article',
            component: () => import('@/views/Article')
        }
    ]
})

export default router