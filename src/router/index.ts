import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
const Home = () => import('@/views/home/Home.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...routers
  ]
})
