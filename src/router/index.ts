import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
import Ipad1 from '../views/Ipad1.vue'
import Ipad2 from '../views/Ipad2.vue'
import Ipad3 from '../views/Ipad3.vue'
import ShowPage from '../views/ShowPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/ipad1',
    name: 'Ipad1',
    component: Ipad1
  },
  {
    path: '/ipad2',
    name: 'Ipad2',
    component: Ipad2
  },
  {
    path: '/ipad3',
    name: 'Ipad3',
    component: Ipad3
  },
  {
    path: '/show',
    name: 'ShowPage',
    component: ShowPage
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

const router = new VueRouter({
  routes
})

export default router
