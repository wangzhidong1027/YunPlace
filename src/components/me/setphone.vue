<template>
  <div id="setphone">
    <div class="outside">
      <div class="inputbox border-1px-b">
        <span class="labelicon phone"></span>
        <mt-field placeholder="请输入手机号" type="tel" v-model="data.mobile">
        </mt-field>
      </div>
      <div class="inputbox border-1px-b">
        <span class="labelicon suo"></span>
        <mt-field placeholder="" type="number" v-model="data.code" :attr="{maxlength:6}">
          <button class="getcode" @click="getcode">{{btnText}}</button>
        </mt-field>
      </div>
      <div class="protocol">
          <span @click="check"><b v-if="istrue"></b></span>
          <div>已阅读并同意<a href="">《用户服务协议》</a></div>
      </div>
      <div class="btn-box">
          <button @click="bind">注册</button>
      </div>
      <p class="int">提示：注册成功后自动绑定微信</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetPhone',
  data () {
    return {
      data: {
        mobile: '',
        code: '',
        openid: ''
      },
      btnText: '获取验证码',
      istrue: true,
      time: 60
    }
  },
  methods: {
    check () {
      this.istrue = !this.istrue
    },
    getcode () {
      if (this.time !== 60) {
        return false
      }
      if (this.$utils.checkType.check(this.data.mobile, 'mobile')) {
        this.$axios.post(
          this.$api.sendSmsAPI,
          this.$qs.stringify({
            data: this.$base64.encode(JSON.stringify({'mobile': this.data.mobile}))
          })
        ).then(result => {
          var res = JSON.parse(this.$base64.decode(result.data))
          if (res.code === '10000') {
            this.down()
            this.$toast('验证码发送成功')
          } else {
            this.$messagebox('提示', res.info)
          }
        }).catch(error => {
          console.log(error)
        })
      } else {
        this.$messagebox('提示', '手机号码不正确')
      }
    },
    down () {
      var timer = null
      var that = this
      that.btnText = '(' + that.time + ')秒后重新获取'
      timer = setInterval(function () {
        that.time--
        if (that.time < 10) {
          that.btnText = '(0' + that.time + ')秒后重新获取'
        } else {
          that.btnText = '(' + that.time + ')秒后重新获取'
        }
        if (that.time === 0) {
          that.time = 60
          that.btnText = '获取验证码'
          clearInterval(timer)
          timer = null
        }
      }, 1000)
    },
    bind () {
      if (!(/^\d{6}$/.test(this.data.code))) {
        this.$messagebox('提示', '验证码不正确')
        return false
      }
      if (!this.istrue) {
        this.$messagebox('提示', '请勾选同意用户服务协议')
        return false
      }
      if (!this.$utils.checkType.check(this.data.mobile, 'mobile')) {
        this.$messagebox('提示', '手机号码不正确')
        return false
      }
      this.$axios.post(
        this.$api.bindPhoneApi,
        this.$qs.stringigy({
          data: this.$base64.encode(JSON.stringify(this.data))
        })
      ).then(result => {
        var res = JSON.parse(this.$base64.decode(result.data))
        if (res.code === '10000') {
          this.$messagebox('提示', '绑定手机号成功').then(action => {
            this.$router.push({
              path: '/home'
            })
          })
        } else {
          this.$messagebox('提示', res.info)
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">
#setphone{
  width: 100%;
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  background: #ffffff;
  .outside{
    padding: 0 0.37rem;
    padding-top:1.2rem;
    .inputbox{
      display: flex;
      justify-content: flex-start;
      height: 0.6rem;
      .phone{
        width: 0.3rem;
        background: url("../../assets/images/phone.png") no-repeat 2px center;
        background-size: 0.2rem auto;
      }
      .suo{
        width: 0.3rem;
        background: url("../../assets/images/lock.png") no-repeat 2px center;
        background-size: 0.2rem auto;
      }
      .mint-cell{
        flex: 1;
        input{
          font-size: 0.16rem;
        }
        input::-moz-placeholder, textarea::-moz-placeholder { color: #d7d7d7; }
        input:-ms-input-placeholder, textarea:-ms-input-placeholder { color: #d7d7d7; }
        input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { color: #d7d7d7;}
      }
      .getcode{
        background: #fff;
        border: none;
        color: #ff3b3d;
        font-size: 0.16rem;
      }
    }
    .protocol{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 0.43rem;
      span{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: relative;
        margin-right: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        &:after{
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          width: 200%;
          border: 1px solid #e0e0e0;
          border-radius: 50%;
          height: 200%;
          transform-origin: left top;
          transform: scale(0.5)
        }
        b {
          display: inline-block;
          width: 0.1rem;
          height: 0.1rem;
          border-radius: 50%;
          background: #ff3b3d;
        }
      }
      div,a{
        font-size: 0.13rem;
        color: #333333;
      }
    }
    .btn-box{
      padding-top: 0.1rem;
      button{
        width: 100%;
        border: none;
        border-radius: 8px;
        line-height: 0.5rem;
        background: #ff3b3d;
        color: #fff;
        font-size: 0.16rem;
      }
    }
    .int{
      font-size: .12rem;
      color: #999999;
      padding-top: 0.15rem;
      text-align: center;
    }
  }
}
</style>
