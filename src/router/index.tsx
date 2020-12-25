import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {Home} from '@/views/Home'
import {About} from "@/views/About";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: <Home student={{name: "string", class: "string", age: 5}}/>
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: <About/>
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
