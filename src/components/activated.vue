<template>
  <div id="activated">
    <div class="activated-list">
      <div class="activated-item">
        <div class="left">欣券</div>
        <div class="right">
          <p class="time">2017-12-02 13:59:45</p>
          <p class="code">fsdfasdfasd12312312sd</p>
          <div class="money">
              ￥<span>1000.00</span>
          </div>
        </div>
      </div>
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
  name: 'Activated'
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
