import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/404',
      name: 'Error404',
      component: () => import('@/components/error-page/404.vue')
    },
    {
      path: '/500',
      name: 'Error500',
      component: () => import('@/components/error-page/500.vue')
    }
  ]
})
