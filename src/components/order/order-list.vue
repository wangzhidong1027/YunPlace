<template>
  <div id="order-list">
    <header>
      <div class="seach-box">
        <input type="text" placeholder="订单编号/商品名称" v-model="data.keywords"/>
        <button @click="init"><i>搜</i></button>
      </div>
    </header>
    <div class="order-box">
        <mt-loadmore
          :bottom-method="loadBottom"
          :autoFill='false'
          ref="loadmore"
          bottomPullText=""
          bottomDropText="↓ 释放加载更多"
          :bottomDistance="70"
          @bottom-status-change="change">
        <ul>
          <li class="order-item border-1px-b border-1px-t" v-for="orderItem in orderArr" :key="orderItem.id">
            <div class="order-header">
              <span class="order-name">{{orderItem.typeName}}</span>
              <span class="order-state">{{StateType(orderItem.status)}}</span>
            </div>
            <div class="goods-info">
              <div class="img">
                <img v-lazy.container="orderItem.image" alt="">
              </div>
              <div class="order-info">
                <div class="order-no">
                   <p>时间：<span>{{orderItem.addtime}}</span></p>
                    <p>订单： <span>{{orderItem.orderNo}}</span></p>
                </div>
                <div class="count">数量：{{orderItem.amount}}</div>
              </div>
            </div>
            <p class="order-money border-1px-b"><span>总计： <b>￥{{orderItem.totalMoney}}</b></span></p>
            <div class="btn" v-if="orderItem.status === 0">
              <button class="border-1px"> 取消订单</button>
              <a  href="">付款</a>
            </div>
          </li>
          <p class="ismore" v-show="bottomStatus === 'pull'">{{mytext}}</p>
        </ul>
        </mt-loadmore>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data () {
    return {
      data: {
        keywords: '',
        page: 1,
        pageSize: '5'
      },
      orderArr: [],
      allLoaded: false,
      bottomStatus: '',
      mytext: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    change (value) {
      console.log(value)
      this.bottomStatus = value
    },
    init () {
      this.orderArr = []
      this.$indicator.open({spinnerType: 'fading-circle'})
      this.$axios.post(
        this.$api.orderlistApi,
        this.$qs.stringify({
          data: this.$base64.encode(JSON.stringify(this.data))
        })
      ).then(res => {
        this.$indicator.close()
        var result = JSON.parse(this.$base64.decode(res.data))
        if (result.code === '10000') {
          this.orderArr = result.data.list
          if (result.data.list.length !== 5) {
            this.allLoaded = true
            this.mytext = '没有更多了'
          } else {
            this.allLoaded = false
            this.mytext = '↑上拉加载更多'
          }
        } else {
          this.$toast(result.info)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    StateType (state) {
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
    },
    loadBottom () {
      this.data.page++
      this.$axios.post(
        this.$api.orderlistApi,
        this.$qs.stringify({
          data: this.$base64.encode(JSON.stringify(this.data))
        })
      ).then(res => {
        var result = JSON.parse(this.$base64.decode(res.data))
        if (result.code === '10000') {
          this.orderArr = this.orderArr.concat(result.data.list)
          if (result.data.list.length !== 5) {
            this.allLoaded = true
            this.mytext = '没有更多了'
          } else {
            this.allLoaded = false
            this.mytext = '↑上拉加载更多'
          }
        } else {
          this.$toast(result.info)
        }
        this.$refs.loadmore.onTopLoaded()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">
#order-list{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f1f5f9;
  header{
    height: 0.45rem;
    background: #fff;
    box-sizing: border-box;
    padding: 0 0.15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .seach-box{
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      font-size: 0rem;
      border-radius:4px;
      overflow: hidden;
      width: 100%;
      display: flex;
      input{
        height: 0.3rem;
        background: #d8d8d8;
        color: #333;
        font-size: 0.14rem;
        padding: 0 0.1rem;
        flex: 1;
        &::-webkit-input-placeholder, textarea::-webkit-input-placeholder { color: #fff; }
      }
      button{
        width: 0.5rem;
        border: none;
        background: #ff3b3d;
        color: #ffffff;
        font-size: 0.15rem;
      }
    }
  }
  .order-box{
    flex: 1;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    .ismore{
        text-align: center;
        line-height: .4rem;
        color: #333;
        font-size: 0.13rem;
      }
    .order-item{
      background: #fff;
      margin-top: 0.1rem;
      overflow: scroll;
      .order-header{
        font-size: 0.14rem;
        line-height: 0.4rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0.15rem;
        .order-name{
          color: #333333;
        }
        .order-state{
          color: #ff3737;
        }
      }
      .goods-info{
        background: #f9f9f9;
        display: flex;
        justify-content: space-between;
        height: 0.63rem;
        align-items: center;
        padding: .15rem;
        .img{
          width: 0.6rem;
         margin-right: 0.1rem;
          img{
            display: block;
            width: 100%;
          }
        }
        .order-info{
          flex: 1;
          font-size: .12rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          .order-no{
            flex: 1;
             p{
              color: #333;
            }
          }
          .count{
            color: #999;
          }
        }
      }
      .order-money{
        padding:0 0.15rem;
        text-align: right;
        font-size: 0.13rem;
        color: #666666;
        line-height: 0.4rem;
        b{
          font-size: 0.15rem;
          color: #333333;
        }
      }
      .btn{
        font-size: 0;
        display: flex;
        padding: 0 .15rem;
        height: .4rem;
        align-items: center;
        justify-content: flex-end;
        button{
          font-size: 0.13rem;
          color: #333333;
          width: 0.74rem;
          height: 0.3rem;
          background: #fff;
          border: none;
          margin-right: 0.15rem;
        }
        a{
          display: inline-block;
          height: 0.3rem;
          font-size: 0.13rem;
          color: #333333;
          width: 0.74rem;
          line-height: 0.3rem;
          text-align: center;
          color: #ff3b3d;
          position: relative;
          &:after {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 200%;
            border: 1px solid #ff3b3d;
            height: 200%;
            transform-origin: left top;
            transform: scale(0.5);
          }
        }
      }
    }
  }
}
</style>
