<template>
  <div class="oil-card">
    <div class="oil">
        <div class="input-box">
          <div class="input-item border-1px-b">
            <mt-field placeholder="请输入油卡卡号" type="number" v-model="number">
            </mt-field>
          </div>
           <div class="input-item">
            <mt-field placeholder="请再次输入油卡卡号" type="number" v-model="number">
            </mt-field>
          </div>
        </div>
      <div class="goods">
        <p class="goods-title">充值金额</p>
        <div class="item-box">
          <div class="goods-item">100元</div>
          <div class="goods-item">100元</div>
          <div class="goods-item">100元</div>
          <div class="goods-item  active-item">100元</div>
        </div>
      </div>
    </div>
    <button class="oil-submit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'OilCard',
  data () {
    return {
      number: ''
    }
  }
}
</script>

<style lang="scss">
.oil-card{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .oil{
    flex: 1;
    padding: 0.15rem;
    background: #f1f5f9;
    overflow: scroll;
    .input-box{
      border-radius: 6px;
      overflow: scroll;
      padding:0 0.33rem;
      box-sizing: border-box;
      background: #fff;
      .mint-cell{
        width: 100%;
      }
      .mint-cell-value input{
        font-size: 0.16rem;
      }
      .mint-field-core::-webkit-input-placeholder{
        color:#d7d7d7;
        font-size: 0.16rem;
      }
      .mint-field-core::-moz-placeholder{
        color:#d7d7d7;
        font-size: 0.16rem;
      }

      .mint-field-core::-moz-placeholder{
        color:#d7d7d7;
        font-size: 0.16rem;
      }
      .mint-field-core::-ms-input-placeholder{
        color:#d7d7d7;
        font-size: 0.16rem;
      }
    }
    .goods{
      width: 100%;
      overflow: hidden;
      .goods-title{
        font-size: .18rem;
        color: #333333;
        text-align: center;
        line-height: 0.55rem;
        letter-spacing: 1px;
        font-weight: 500;
      }
      .item-box{
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        width: 110%;
        overflow: hidden;
        .goods-item{
          line-height: 0.59rem;
          background: #fff;
          width: 1.67rem;
          text-align: center;
          font-size: 0.2rem;
          margin-right: 0.1rem;
          margin-bottom: 0.1rem;
          position: relative;
        }
        .goods-item::after{
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          width: 200%;
          border: 1px solid #e3e5e9;
          border-radius: 12px;
          height: 200%;
          transform-origin: left top;
          transform: scale(0.5);
        }
        .active-item{
          color: #ff3b3d;
          background: #fffbfb;
          &::after{
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 200%;
            border: 1px solid red;
            border-radius: 12px;
            height: 200%;
            transform-origin: left top;
            transform: scale(0.5);
          }
        }
      }
    }
  }
  .oil-submit{
    border: none;
    background: #ff3b3d;
    font-size: 0.18rem;
    color: #ffffff;
    line-height: 0.45rem;
    letter-spacing: 10px;
    font-weight: 500;
  }
}
</style>
