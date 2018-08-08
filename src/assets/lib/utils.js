let utils = {}
utils.resetdow = (function (doc, win) {
  // 重置html的font-size
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
utils.checkType = (function () {
  let rules = {
    email (str) {
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    },
    mobile (str) {
      return /^1[3|4|5|7|8|9][0-9]{9}$/.test(str)
    },
    tel (str) {
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    },
    number (str) {
      return /^[0-9]$/.test(str)
    },
    english (str) {
      return /^[a-zA-Z]+$/.test(str)
    },
    text (str) {
      return /^\w+$/.test(str)
    },
    chinese (str) {
      return /^[\u4E00-\u9FA5]+$/.test(str)
    },
    lower (str) {
      return /^[a-z]+$/.test(str)
    },
    upper (str) {
      return /^[A-Z]+$/.test(str)
    },
    special (str) {
      return /^[0-9a-zA-Z]+$/g.test(str)
    },
    idcard (str) {
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    }
  }
  return {
    check (str, type) {
      return rules[type] ? rules[type](str) : false
    },
    addRule (type, fn) {
      rules[type] = fn
    }
  }
})()
export default utils
