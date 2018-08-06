<template>
  <div class="app-index">
    <div class="home-content">
      <div class="swiper">
        <mt-swipe :auto="4000" :prevent="true">
          <mt-swipe-item><img src="../assets/swipe1.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../assets/swipe2.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="nav">
          <nav>
            <a href="">
              <img src="../assets/images/petrifaction.png" alt="">
              <aside>中国石化</aside>
            </a>
            <a href="">
             <img src="../assets/images/petroleum.png" alt="">
              <aside>中国石油</aside>
            </a>
             <a href="">
             <img src="../assets/images/telephone_charges.png" alt="">
              <aside>话费充值</aside>
            </a>
             <a href="">
             <img src="../assets/images/expect.png" alt="">
              <aside>敬请期待</aside>
            </a>
          </nav>
      </div>
      <div class="banner">
        <img src="../assets/imgbox.png" alt="">
      </div>
      <div class="service">
        <article><span>客服电话：</span>400-000-0000</article>
        <article><span>投诉邮箱：</span>service@xinxiangfuwu.com</article>
        <article><span>服务电话：</span>周一至周日 9:00</article>
      </div>
    </div>
    <nav-tab defaut='首页'></nav-tab>
  </div>
</template>

<script>
import NavTab from './main-components/nav-tab/nav-tab'
export default {
  name: 'Home',
  components: {
    NavTab
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .app-index {
    width: 100%;
    height: 100%;
    background-color: #f1f5f9;
    .home-content {
      width: 100%;
      height: 100%;
      overflow: scroll;
      box-sizing: border-box;
      padding-bottom: .7rem;
      overflow: scroll;
      .swiper {
        width: 100%;
        height: 1.75rem;
        overflow: hidden;
        .mint-swipe-indicators {
          width: 100%;
          text-align: right;
          padding-right: 0.2rem;
          bottom: 0;
        }
        img {
          width: 100%;
        }
        .mint-swipe-indicator {
          background: #fff;
          opacity: 0.4;
        }
        .is-active {
          opacity: 1;
        }
      }
      .nav{
        width: 100%;
        padding: 0 .15rem;
        background: #fff;
        box-sizing: border-box;
      }
      nav{
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: .2rem 0;
        a{
          display: flex;
          flex-direction: column;
          flex: 1;
          img{
            width: .4rem;
            display: block;
            margin: 0 auto;
          }
          aside{
            padding-top: 0.06rem;
            font-size: 0.12rem;
            text-align: center;
            color: #666666;
          }
        }
      }
      .banner{
        width: 100%;
        box-sizing: border-box;
        padding:.15rem;
        img{
          width: 100%;
        }
      }
      .service{
        font-size: .12rem;
        color: #999999;
        line-height: 0.25rem;
        span{
          display: inline-block;
          text-align: right;
          width: 1.35rem;
        }
      }
    }
  }
</style>
