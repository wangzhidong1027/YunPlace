<template>
  <div id="activated">
    <div class="activated-list">
      <mt-loadmore
          :bottom-method="loadBottom"
          :autoFill='false'
          ref="loadmore"
          :allLoaded="allLoaded"
          bottomPullText="↑ 上拉获取更多"
          bottomDropText="↓ 释放加载更多"
          :bottomDistance="70">
        <div>
          <div class="activated-item" v-for="coupItem in coupArr" :key="coupItem.id">
            <div class="left">欣券</div>
            <div class="right">
              <p class="time">{{coupItem.expireTime}}</p>
              <p class="code">{{coupItem.activeCode}}</p>
              <div class="money">
                  ￥<span>{{coupItem.money}}</span>
              </div>
            </div>
          </div>
        </div>
      </mt-loadmore>
    </div>
    <div class="tab-bar">
      <a href="#/home">商城首页</a><span></span>
      <a >我的欣豆</a><span></span>
      <a >激活新的兑换码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activated',
  data () {
    return {
      coupArr: [],
      data: {
        pageNo: '1',
        pageSize: 6
      },
      allLoaded: false
    }
  },
  methods: {
    init () {
      this.$axios.post(
        this.$axios.post(
          this.$api.couponlistApi,
          this.$qs.stringify({
            data: this.$base64.encode(JSON.stringify(this.data))
          })
        ).then(result => {
          var res = JSON.parse(this.$base64.decode(result.data))
          if (res.code === '10000') {
            this.coupArr = this.res.data
            if (res.data.length !== 6) {
              this.allLoaded = true
            }
          } else {
            this.$toast(res.info)
            this.allLoaded = true
          }
        }).catch(error => {
          console.log(error)
        })
      )
    },
    loadBottom () {
      this.$axios.post(
        this.$axios.post(
          this.$api.couponlistApi,
          this.$qs.stringify({
            data: this.$base64.encode(JSON.stringify(this.data))
          })
        ).then(result => {
          var res = JSON.parse(this.$base64.decode(result.data))
          if (res.code === '10000') {
            this.coupArr = this.coupArr.concat(this.res.data)
            if (res.data.length !== 6) {

            }
          } else {
            this.$toast(res.info)
          }
        }).catch(error => {
          console.log(error)
        })
      )
    }
  }
}
</script>

<style scoped lang="scss">
#activated{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
   background: #f1f5f9;
  .activated-list{
    flex: 1;
    padding: 0.15rem;
    overflow: scroll;
    .activated-item{
      margin-bottom: 0.1rem;
      border-radius: 6px;
      background: #fff;
      height: 1rem;
      overflow: hidden;
      display: flex;
      .left{
        height: 100%;
        width: 1.1rem;
        background: url("../assets/images/activated.jpg");
        background-size: 100% auto;
        font-size: 0.25rem;
        color: #fff;
        text-align: center;
        line-height: 1rem;
      }
      .right{
        flex: 1;
        background: url("../assets/images/content2.png") no-repeat right 0.08rem;
        background-size: auto  60%;
        padding: 0.1rem .15rem;
        p{
          font-size: 0.11rem;
          color: #333333;
          line-height: 0.18rem;
        }
        .code{
          /*letter-spacing:1px*/
        }
        .money{
          font-size: .13rem;
          color: #333333;
          line-height: .7rem;
          span{
            font-size: .18rem;
            font-weight: bold;
            color: #333;
          }
        }
      }
    }
  }
  .tab-bar{
    height: 0.45rem;
    display: flex;
    align-items: center;
    background: #fff;
    text-align: center;
    span{
      display: inline-block;
      height: 0.1rem;
      width: 1px;
      background: #000;
    }
    a{
      display: inline-block;
      flex: 1;
      font-size: 0.14rem;
      color: #333333;
      text-align: center;
    }
  }
}
</style>
