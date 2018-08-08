<template>
  <div id="order-detail">
    <div class="order-state state-succeed">
      <i></i><b>处理中</b>
    </div>
    <!--<div class="order-state state-lose"><i></i><span>已取消</span></div>-->
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
      <p><span>订单类型: </span><b>话费充值</b></p>
      <p><span>充值号码: </span><b>13812459658</b></p>
      <p><span>支付方式: </span><b>欣豆支付</b></p>
    </div>
    <div class="amount border-1px-b">
        <b>实付金额： </b><span>￥200.00</span>
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
      info: {}
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
      } else {
        this.$toast(res.info)
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped lang="scss">
  #order-detail{
    height: 100%;
    width: 100%;
    overflow: scroll;
    background: #f5f5f5;
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
