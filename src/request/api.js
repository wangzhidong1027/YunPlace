// api
const Baseurl = '/market-api'

const sendSmsAPI = Baseurl + '/custom/sendSms' // 短信验证码

const bindPhoneApi = Baseurl + 'custom/bind' // 绑定手机号注册
const orderlistApi = Baseurl + '/orderInfo/index' // 订单列表
const orderinfoApi = Baseurl + '/orderInfo/view' // 订单详情
const exchangeApi = Baseurl + '/certificate/activation' // 兑换
const recodeDetailApi = Baseurl + '/orderInfo/recordDetail' // 豆记录
const couponlistApi = Baseurl + '/certificate/couponlist' // 已激活列表

const api = {
  sendSmsAPI,
  bindPhoneApi,
  orderlistApi,
  orderinfoApi,
  exchangeApi,
  couponlistApi,
  recodeDetailApi
}

export default api
