<template>
  <div class="phone">
    <div class="oil">
        <div class="input-box">
          <div class="input-item border-1px-b">
            <mt-field placeholder="请输入手机号" type="tel" v-model="tel"  :attr="{ maxlength: 11 }"  @keyup.native.capture="getSupplier">
            </mt-field>
            <div v-if="carrier" class="supplier border-1px-l">{{carrier}}</div>
          </div>
           <div class="input-item">
            <mt-field placeholder="请输入手机号" type="tel" v-model="tel"  :attr="{ maxlength: 11 }">
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
import Jsonp from 'jsonp'
export default {
  name: 'Phone',
  data () {
    return {
      tel: '',
      carrier: ''
    }
  },
  methods: {
    getSupplier () {
      if (this.$utils.checkType.check(this.tel, 'mobile')) {
        Jsonp('https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=18738302838', null, (err, data) => {
          if (err) {
            // this.$toast('获取归属失败')
            // console.error(err.message)
          } else {
            this.carrier = data.carrier
          }
        })
      } else {
        this.carrier = ''
      }
    }
  }
}
</script>

<style lang="scss">
.phone{
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
      .supplier{
        font-size: 0.16rem;
        color: #ff3b3d;
        width: 1.13rem;
        text-align: right;
        padding-left: 0.1rem;
      }
      .mint-cell{
        width: 100%;
      }
      .input-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
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
