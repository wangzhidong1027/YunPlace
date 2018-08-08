// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

import Service from './request/axios'
import Qs from 'qs'
import Api from './request/api'
import {Base64} from 'js-base64'

import Utils from './assets/lib/utils'
import FastClick from 'fastclick'

// 解决点击延迟，绑定到body
FastClick.attach(document.body)

Vue.use(MintUi)
Vue.prototype.$axios = Service
Vue.prototype.$qs = Qs
Vue.prototype.$api = Api
Vue.prototype.$base64 = Base64
Vue.prototype.$utils = Utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
