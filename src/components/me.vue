<template>
  <div id="me">
    <div class="me-content">
      <!--<header class="border-1px-b">-->
        <!--<div class="user-info">-->
          <!--<div class="info-content">-->
            <!--<div class="use-img"></div>-->
            <!--<div class="user-id">18738302838</div>-->
            <!--<a class="exchange">激活兑换码</a>-->
          <!--</div>-->
          <!--<div class="user-data">-->
            <!--<div class="outside left-box">-->
              <!--<div class="number">1000</div>-->
              <!--<div class="my-number">我的欣豆</div>-->
            <!--</div>-->
            <!--<div class="outside">-->
              <!--<div class="number">2</div>-->
              <!--<div class="my-number">我的订单</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</header>-->
      <div class="my-arch border-1px-b">
        <arch></arch>
        <div class="my-info" ref="box">
            <canvas ref='canvas'></canvas>
           <div class="arch-info">
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
        </div>
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
    return {
      canvas: '',
      canvasWidth: '',
      canvasHeight: '',
      xOffset: 0,
      speed: 0.02
    }
  },
  methods: {
    drawSin (xOffset) {
      const ctx = this.canvas.getContext('2d')
      var mygradient = ctx.createLinearGradient(0, 0, 0, this.canvasHeight)
      mygradient.addColorStop(0, 'rgba(255, 247, 247, 0.2)')
      mygradient.addColorStop(1, 'rgba(255, 230, 230, 0.6)')
      ctx.fillStyle = mygradient
      const points = []
      const canvasWidth = this.canvasWidth
      const canvasHeight = this.canvasHeight
      const startX = 0
      const waveWidth = 0.028 // 波浪宽度,数越小越宽
      const waveHeight = 15 // 波浪高度,数越大越高
      // const xOffset = 10 // 水平位移
      ctx.beginPath()
      for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
        const y = waveHeight * Math.sin((startX + x) * waveWidth + xOffset)
        points.push([x, (canvasHeight / 1.5) + y])
        ctx.lineTo(x, (canvasHeight / 1.5) + y)
      }
      ctx.lineTo(canvasWidth, canvasHeight)
      ctx.lineTo(startX, canvasHeight)
      ctx.lineTo(points[0][0], points[0][1])
      ctx.fill()
    },
    draw () {
      const canvas = this.canvas
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#fff7f7'
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // 曲线绘制
      this.drawSin(this.xOffset)
      this.drawSin(this.xOffset + 2.5)
      this.xOffset += this.speed
      requestAnimationFrame(this.draw.bind(this))
    }
  },
  mounted () {
    var box = this.$refs.box
    var canvas = this.$refs.canvas
    this.canvas = canvas
    this.canvasWidth = box.offsetWidth
    this.canvasHeight = box.offsetHeight
    this.canvas.width = box.offsetWidth
    this.canvas.height = box.offsetHeight
    this.canvas.style = 'position: absolute; left:.15rem; top:.25rem;z-index:10;border-radius: 8px;'
    this.xOffset += this.speed
    requestAnimationFrame(this.draw.bind(this))
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
      padding-bottom: 0.6rem;
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
              border-radius: 8px;
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
