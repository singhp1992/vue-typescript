import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home' 
import Categories from '@/components/Categories'
import Random from '@/components/Random'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/categories',
            name: 'Categories',
            component: Categories
        },
        {
            path: '/random',
            name: 'random',
            component: Random
        }
    ]
})