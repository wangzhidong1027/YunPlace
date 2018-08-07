<template>
  <div class="order-pay">
    <div class="order-info">
      <header>
        <p>订单编号：<span>1454545245254124124124121</span></p>
        <p>订单总额：<span>14545452.000</span>元</p>
        <div class="in"><i class="iconfont icon-tanhao"></i>请您在提交订单后24小时内完成支付，超时自动取消</div>
      </header>
       <div class="pay-type">
        <p class="border-1px-b"><span>选择支付方式</span> <i>欣豆可用余额<b>20000</b>个</i></p>
        <div class="type">
          <div class="type-item">
            <div class="name"><i class="iconfont icon-douzi-gai"></i><b>欣豆支付</b></div>
            <div class="use"><span class="is-sel iconfont icon-icon"></span></div>
          </div>
        </div>
      </div>
    </div>
    <button class="gopay">确定</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.order-pay{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f1f5f9;
  .order-info{
    flex: 1;
    overflow: scroll;
    header{
      padding: .15rem;
      background: #fff;
      p{
        font-size: .14rem;
        color: #333333;
        line-height: .25rem;
      }
      .in{
        font-size: 0.11rem;
        color: #ff3b3d;
        line-height: 0.3rem;
        i{
          font-size: 0.16rem;
          font-weight: bold;
          padding-right: 5px;
        }
      }
    }
    .pay-type{
      margin-top: 0.15rem;
      background: #ffffff;
      p{
        font-size: 0.14rem;
        color: #666666;
        line-height: .45rem;
        padding:0 0.15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
          display: inline-block;
          color: #999999;
          font-size: 0.12rem;
          b{
            color: #ff3b3d;
          }
        }
      }
      .type{
        padding-left: 0.15rem;
        .type-item{
          font-size: 0.16rem;
          color: #333333;
          height: 0.6rem;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .name{
            height: 100%;
            display: flex;
            align-items: center;
            b{
              line-height: 0.6rem;
              letter-spacing: 1px;
              font-weight: normal;
            }
           i{
            color: #ff3b3d;
            font-size: 0.25rem;
            margin-right: 0.1rem;
            }
          }
          .use{
            padding: 0 0.15rem;
            .is-sel{
              font-size: 0.2rem;
              color: #ff3b3d;
            }
          }
        }
      }
    }
  }
  .gopay{
    width: 100%;
    height: 0.45rem;
    background: #ff3b3d;
    color: #ffffff;
    font-size: 0.18rem;
    letter-spacing: 10px;
    border: none;
  }
}
</style>
