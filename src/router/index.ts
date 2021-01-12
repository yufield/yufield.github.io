import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Article from '../view/Article.vue'
import Home from '../view/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: '/article/:id',
        name: 'Article',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Article,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router