import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { Home } from '@/views/Home'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: <Home student={{ name: "string", class: "string", age: 5 }}></Home>
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
