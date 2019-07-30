import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home' 
import Categories from '@/components/categories'
import Random from '@/components/random'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/categories',
            name: 'categories',
            component: Categories
        },
        {
            path: '/random',
            name: 'random',
            component: Random
        }
    ]
})