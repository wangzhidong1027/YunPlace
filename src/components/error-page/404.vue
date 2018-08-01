<style lang="scss">
    @import './404.scss';
</style>

<template>
    <div class="error404">
        <div class="error404-body-con">
            <div class="error404-body-con-title">4<span class="error404-key-span"><i>0</i></span>4</div>
            <p class="error404-body-con-message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
            <div class="error404-btn-con">
                <button @click="goHome"   type="text">返回首页</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Error404',
  methods: {
    goHome () {
      this.$router.push({
        name: 'home_index'
      })
    }
  }
}
</script>
