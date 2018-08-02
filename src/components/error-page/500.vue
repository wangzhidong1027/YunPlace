<style lang="scss">
    @import './500.scss';
</style>

<template>
    <div class="error500">
        <div class="error500-body-con">
            <div class="error500-body-con-title">
              5<span class="error500-0-span"><i class="iconfont icon-mengquandui"></i></span><span class="error500-0-span"><i class="iconfont icon-mengquandui"></i></span>
            </div>
            <p class="error500-body-con-message">Oops! the server is wrong</p>
            <div class="error500-btn-con">
                <button @click="goHome" class="home">返回首页</button>
                <button @click="backPage" class="up-page">返回上一页</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Error500',
  methods: {
    backPage () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push({
        name: 'home_index'
      })
    }
  }
}
</script>
