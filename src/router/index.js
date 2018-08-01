import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
