import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: { name: 'Error404' }},
    {path: '*', redirect: { name: 'Error404' }},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/activated',
      name: 'Activated',
      component: () => import('@/components/activated.vue')
    },
    {
      path: '/rechange',
      name: 'Rechange',
      component: () => import('@/components/rechange.vue'),
      children: [
        {path: '/rechange/oilcard/:id', name: 'OilCard', component: () => import('@/components/rechange/oil-card.vue')},
        {path: '/rechange/phone', name: 'Phone', component: () => import('@/components/rechange/phone.vue')}
      ]
    },
    {
      path: '/me',
      name: 'Me',
      component: () => import('@/components/me.vue')
    },
    {
      path: '/exchange',
      name: 'ExChange',
      component: () => import('@/components/me/exchange.vue')
    },
    {
      path: '/peas',
      name: 'Peas',
      component: () => import('@/components/me/peas.vue')
    },
    {
      path: '/setphone',
      name: 'Setphone',
      component: () => import('@/components/me/setphone.vue')
    },
    // order
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/components/order.vue'),
      children: [
        {
          path: '/order/detail/:orderNo',
          name: 'OrderDetail',
          component: () => import('@/components/order/order-detail.vue')
        },
        {
          path: '/order/pay',
          name: 'OrderPay',
          component: () => import('@/components/order/order-pay.vue')
        },
        {
          path: '/order/list',
          name: 'OrderList',
          component: () => import('@/components/order/order-list.vue')
        }
      ]
    },
    // order end
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
