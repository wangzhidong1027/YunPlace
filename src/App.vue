<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeCreate () {
    var myurl =
    this.$axios.post(
      this.$api.getOpendApi,
      this.$qs.stringify({
        encrypt: 'C4CA4238A0B923820DCC509A6F75849B'
      })
    ).then(result => {
      var res = JSON.parse(this.$base64.decode(result.data))
      if (res.code === '10000') {
        window.location.href = res.data.usergranturl.replace('locationurl', this.$base64.encode(window.location.href + '/home'))
      } else {
        this.$router.push({
          path: '/500'
        })
      }
    }).catch(error => {
      console.log(error)
    })
  },
  watch: {
    $route (to, from) {
      var isback = localStorage.getItem('isback')
      if (Number(isback) === history.length) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
        localStorage.setItem('isback', history.length)
      }
      this.$router.isBack = false
    }
  }
}
</script>

<style lang="scss">
  @import './assets/reset';
  @import './assets/style/1px.scss';

  html, body, #app {
    width: 100%;
    height: 100%;
  }

  body {
    font-size: 16px;
  }

  .Router {
    position: absolute;
    width: 100%;
    transition: all .8s ease;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
</style>
