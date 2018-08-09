<template>
  <div id="peas">
    <header>
      <div class="top">
        <div class="count">
          <p>当前<span>10000</span> 个<i class="iconfont icon-douzi-gai"></i></p>
        </div>
        <nav><div class="text">全部<i></i></div></nav>
        <div class="shado-box"></div>
      </div>
    </header>
    <div class="outside">
      <ul class="border-1px-t">
        <li class="border-1px-b" v-for="pea in Apeas" :key="pea.batch_id">
          <p>
            <span class="usetime">{{pea.addtime}}</span>
            <span class="number" v-if="pea.type == 1 | pea.type == 3">-1111</span>
            <span class="add" v-if="pea.type == 0 | pea.type == 2">+1111</span>
          </p>
          <p><span class="addtime">{{pea.coupon_no + pea.expire_time}}</span><span class="type">{{pea.content}}</span></p>
        </li>
         <!--<li class="border-1px-b">-->
            <!--<p><span class="usetime">2018-06-01 14:39:45 14490359969976 </span><span class="number">1111</span></p>-->
            <!--<p><span class="addtime">2018-06-01 14:39:45 14490359969976 </span><span class="type">消费</span></p>-->
          <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Peas',
  data () {
    return {
      Apeas: [],
      data: {
        page: 1,
        type: ''
      }
    }
  },
  created () {
    this.$axios.post(
      this.$api.recodeDetailApi,
      this.$qs.stringify({
        data: this.$base64.encode(JSON.stringify(this.data))
      })
    ).then(result => {
      var res = JSON.parse(this.$base64.decode(result.data))
      if (res.code === '10000') {
        if (this.Apeas.length) {
          this.Apeas = this.Apeas.concat(res.data.list)
        } else {
          this.Apeas = res.data.list
        }
      } else {
        this.$messagebox('提示', res.info)
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped lang="scss">
#peas{
  width: 100%;
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  header{
    height: 1.35rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0 .15rem;
    padding-top: 0.35rem;
    background: #ff7642;
    background: -webkit-linear-gradient(#ff7642, #ff3e31); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#ff7642, #ff3e31); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#ff7642, #ff3e31); /* Firefox 3.6 - 15 */
    background: linear-gradient(#ff7642, #ff3e31); /* 标准的语法 */
    .top{
      width: 100%;
      height: 1.35rem;
      background: #fff;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      .count{
       flex: 1;
        p{
          padding-top: 0.35rem;
          font-size: 0.14rem;
          text-align: center;
          span{
            font-size: 0.35rem;
          }
          i{
            margin-left: 4px;
            color: #ff8e00;
            font-size: .17rem;
            font-family: '微软雅黑';
            background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(255, 160, 0, 1)), to(rgba(255, 130, 0, 1)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
      nav{
        width: 100%;
        .text{
          width: 1rem;
          text-align: center;
          font-size: 0.14rem;
          color: #999999;
          display: block;
          margin: 0 auto;
        }
      }
      .shado-box{
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        height: 0.36rem;
        box-shadow:  0 15px 10px 10px #f9f9fa;
      }
    }
  }
  .outside{
    padding: 0 0.15rem;
    padding-top: 0.55rem;
    li{
      padding:  0.1rem 0;
      p{
        line-height: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .12rem;
        .usetime{
          color: #999999;
        }
        .addtime{
          color: #333333;
        }
        .type{
          color: #333333;
        }
        .number{
          color: #ff3b3d;
        }
        .add{
          color: #22b72c
        }
      }
    }
  }
}
</style>
