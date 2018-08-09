<template>
  <div id="order-detail" v-show="show">
    <div class="infobox">
      <div class="order-state state-succeed" v-if="info.status !==3">
        <i></i><b>{{statusType(info.status)}}</b>
      </div>
      <div class="order-state state-lose" v-if="info.status ===3"><i></i><span>已取消</span></div>
      <div class="order-content border-1px-b">
        <div class="img-box">
          <img :src="info.image" alt="">
        </div>
        <div class="goods-info">
          <p class="name">{{info.typeName}}</p>
          <div class="goode-detail"><span class="money">￥{{info.totalMoney}}</span><span class="count">×{{info.amount}}</span></div>
        </div>
      </div>
      <div class="order-info border-1px-b">
        <p><span>订单编号: </span><span>{{info.orderNo}}</span></p>
        <p><span>下单时间: </span><span>{{info.addtime}}</span></p>
        <p v-if="info.status !== '0'"><span>支付时间: </span><span>{{info.totalMoney}}</span></p>
        <!--<p><span>完成时间: </span><span>2017-12-07 09:20:35</span></p>-->
      </div>
      <div class="order-info border-1px-b">
        <p><span>订单类型: </span><b>{{info.typeName}}</b></p>
        <p><span>充值号码: </span><b>{{info.chargeNo}}</b></p>
        <p><span>支付方式: </span><b>欣豆支付</b></p>
      </div>
      <div class="amount border-1px-b">
          <b>实付欣豆： </b><span>{{info.totalDou}}</span>
      </div>
      </div>
    <div class="btn-box border-1px-t border-1px-b" v-if="info.status===0">
      <a :href="'#/order/pay/'+data.orderNo">立即付款</a> <button class="border-1px">取消订单</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  data () {
    return {
      isshow: false,
      data: {
        orderNo: ''
      },
      info: {},
      show: false
    }
  },
  created () {
    this.data.orderNo = this.$route.params.orderNo
    this.$indicator.open({spinnerType: 'fading-circle'})
    this.$axios.post(
      this.$api.orderinfoApi,
      this.$qs.stringify({
        data: this.$base64.encode(JSON.stringify(this.data))
      })
    ).then(result => {
      this.$indicator.close()
      var res = JSON.parse(this.$base64.decode(result.data))
      if (res.code === '10000') {
        this.info = res.data
        this.show = true
      } else {
        this.$toast(res.info)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    statusType (state) {
      switch (state) {
        case 0:
          return '待支付'
        case 1:
          return '已支付'
        case 2:
          return '支付失败'
        case 3:
          return '已取消'
        case 4:
          return '申请退款 '
        case 5:
          return '已退款'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #order-detail{
    height: 100%;
    width: 100%;
    overflow: scroll;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    .infobox{
      flex: 1;
    }
    .btn-box{
      background: #fff;
      height: 0.5rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 0.15rem;
      a{
        display: inline-block;
        width: 0.82rem;
        color: #fff;
        background: #ff3b3d;
        border-radius: 4px;
        line-height: 0.37rem;
        text-align: center;
        font-size: 0.13rem;
        height: 0.37rem;
        margin-right: 10px;
      }
      button{
        border: none;
        display: inline-block;
        width: 0.82rem;
        color: #333;
        background: #fff;
        border-radius: 4px;
        line-height: 0.37rem;
        font-size: 0.13rem;
        text-align: center;
      }
    }
    .order-state{
      width: 100%;
      box-sizing: border-box;
      padding-left: 0.15rem;
      color: #fff;
      font-size: 0.17rem;
      line-height: 0.7rem;
      i{
        display: inline-block;
        width: 0.3rem;
        height: 100%;
      }
      b{
        display: inline-block;
        height: 100%;
      }
    }
    .state-succeed{
      background: url("../../assets/images/ok.png") no-repeat left top;
      background-size: 100% 100%;
    }
    .state-lose{
      background: url("../../assets/images/cel.png") no-repeat left top;
      background-size: 100% 100%;
    }
    .order-content{
      padding: .15rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      background: #fff;
      .img-box{
        img{
          width: .6rem;
          display: block;
        }
      }
      .goods-info{
        flex: 1;
        padding-left: 0.1rem;
        line-height: 0.3rem;
        .name{
          font-weight: bold;
          color: #333333;
        }
        .goode-detail{
          display: flex;
          justify-content: space-between;
          .money{
            color: #ff3737;
            font-weight: bold;
          }
          .count{
            font-size: .12rem;
            color: #999999;
          }
        }
      }
    }
    .order-info{
      box-sizing: border-box;
      padding: 0.1rem 0;
      font-size: .13rem;
      color: #666666;
      padding-left: .15rem;
      line-height: .25rem;
      letter-spacing:1px;
      background: #fff;
      b{
        color: #333333;
      }
    }
    .amount{
      box-sizing: border-box;
      width: 100%;
      padding: 0 0.15rem;
      display: flex;
      justify-content: flex-end;
      background: #fff;
      font-size: 0.13rem;
      line-height: 0.45rem;
      b{
        color: #333;
      }
      span{
        color: #ff3737;
      }
    }
  }
</style>
