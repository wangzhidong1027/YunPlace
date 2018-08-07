// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'

// 获取屏幕宽度 设置HTML的font-size
(function (doc, win) {
  var docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

Vue.use(MintUi)

const service = Axios.create({
  timeout: 20000 // request timeout
})
service.interceptors.request.use(function (config) {
  config.headers['Token'] = localStorage.getItem('token')
  return config
})

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
service.interceptors.response.use(
  response => {
    // if (response) {
    //   switch (response.status) {
    //     case 401:
    //       // 这里写清除token的代码
    //       sessionStorage.clear()
    //       router.replace({
    //         path: '/login'
    //         // query: {redirect: router.currentRoute.fullPath}// 登录成功后跳入浏览的当前页面
    //       })
    //   }
    // }
    return response
  },
  error => {
    // if (error.response) {
    //   // 只要报错，统一跳转到500
    //   // 这里写清除token的代码
    //   sessionStorage.clear()
    //   router.replace({
    //     path: '/500'
    //     // query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
    //   })
    // }
    return Promise.reject(error.response.data)
  })
// 响应拦截结束

Vue.prototype.$axios = service

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
