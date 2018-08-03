<template>
  <div id="me">
    <div class="me-content">
      <header class="border-1px-b">
        <div class="user-info">
          <div class="info-content">
            <div class="use-img"></div>
            <div class="user-id">18738302838</div>
            <a class="exchange">激活兑换码</a>
          </div>
          <div class="user-data">
            <div class="outside left-box">
              <div class="number">1000</div>
              <div class="my-number">我的欣豆</div>
            </div>
            <div class="outside">
              <div class="number">2</div>
              <div class="my-number">我的订单</div>
            </div>
          </div>
        </div>
      </header>
      <div class="my-arch border-1px-b">
        <arch></arch>
      </div>
      <div class="me-nav">
        <ul>
          <li>
            <div class="icon help"></div>
            <div class="border-1px-b nav-title">
              <span>帮助中心</span>
              <i> ></i>
            </div>
          </li>
          <li>
            <div class="icon server"></div>
            <div class="border-1px-b nav-title">
              <span>在线客服</span>
              <i>> </i>
            </div>
          </li>
          <li>
            <div class="icon tel"></div>
            <div class="border-1px-b nav-title">
              <span>客服电话</span>
              <i>400-000-0000</i>
            </div>
          </li>
          <li>
            <div class="icon email"></div>
            <div class="border-1px-b nav-title">
              <span>客服邮箱</span>
              <i>service@xinxiangfuwu.com</i>
            </div>
          </li>
          <li>
            <div class="icon time"></div>
            <div class="border-1px-b nav-title">
              <span>服务时间</span>
              <i>周一至周日 9:00-18:00</i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <nav-tab defaut='我的欣享'></nav-tab>
  </div>
</template>

<script>
import NavTab from './main-components/nav-tab/nav-tab'
import Arch from './main-components/arch'
export default {
  name: 'me',
  components: {
    NavTab,
    Arch
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
  @import "./me";
  #me {
    width: 100%;
    height: 100%;
    /*display: flex;*/
    /*flex-direction: column;*/
    .me-content {
      height: 100%;
      overflow: scroll;
      /*flex: 1;*/
      padding-bottom: 0.5rem;
      box-sizing: border-box;
      header {
        height: 2.28rem;
        background: url("../assets/images/sarch.png") no-repeat left top;
        background-size: 100% auto;
        box-sizing: border-box;
        padding: .25rem 0.15rem 0 .15rem;
        .user-info {
          height: 1.7rem;
          border-radius: 4px;
          background: #fff url("../assets/images/wave.png") no-repeat left bottom;
          background-size: 100% auto;
          /*box-shadow: 0 15px 20px #fcf0f0;*/
          display: flex;
          flex-direction: column;
          .info-content {
            display: flex;
            justify-content: space-between;
            padding: 0 .15rem 0 .2rem;
            align-items: center;
            height: 1rem;
            .use-img {
              width: 0.5rem;
              height: 0.5rem;
              border-radius: 50%;
              background: red;
              overflow: hidden;
              img {
                width: 100%;
              }
            }
            .user-id {
              flex: 1;
              font-size: .16rem;
              color: #333333;
              padding-left: .15rem;
            }
            .exchange {
              width: 1.05rem;
              height: 0.35rem;
              font-size: 0.13rem;
              color: #fff;
              background: #ff3b3d;
              border-radius: 0.52rem;
              text-align: center;
              line-height: 0.35rem;
            }
          }

          .user-data {
            flex: 1;
            border-radius: 4px;
            box-shadow: 0 15px 20px 5px #fdf4f4;
            overflow: hidden;
            .left-box {
              border-right: 1px solid #ffd7d7;
            }
            .outside {
              width: 50%;
              float: left;
              display: flex;
              flex-direction: column;
              font-size: 0.14rem;
              text-align: center;
              box-sizing: border-box;
              .number {
                color: #ff3b3d;
                font-weight: bold;
                font-size: .2rem;
              }
              .my-number {
                margin-top: 0.06rem;
                color: #666666;
              }
            }
          }
        }
      }
      .me-nav {
        width: 100%;
        ul {
          padding-left: 0.15rem;
          li {
            display: flex;
            justify-content: space-between;
            font-size: .15rem;
            color: #333333;
            line-height: 0.5rem;
            .nav-title {
              flex: 1;
              display: flex;
              justify-content: space-between;
              i {
                padding-right: .15rem;
                color: #999999;
              }
            }
            .icon {
              width: 0.35rem;
              background-repeat: no-repeat;
              -webkit-background-size: .2rem;
              background-size: .2rem;
              background-position: left center;
            }
            .help {
              background-image: url("../assets/images/back.png");
            }
            .server {
              background-image: url("../assets/images/server.png");
            }
            .tel {
              background-image: url("../assets/images/tel.png");
            }
            .email {
              background-image: url("../assets/images/email.png");
            }
            .time {
              background-image: url("../assets/images/time.png");
            }
          }
        }
      }
    }

  }
</style>
