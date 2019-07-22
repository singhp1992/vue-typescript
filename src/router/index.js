import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home' // this is the import line to add
import Categories from '@/components/Categories'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, //below is the object that was added for the home path
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
})