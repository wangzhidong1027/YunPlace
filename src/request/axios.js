import Axios from 'axios'
// import Base64 from 'js-base64'

const service = Axios.create({
  timeout: 20000 // request timeout
})

service.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
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

export default service
