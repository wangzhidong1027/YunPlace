<template>
  <div class="my-navtab">
     <mt-tabbar v-model="selected" :fixed="true" >
      <mt-tab-item  v-for="navitem in nav" :href="navitem.link" :id="navitem.name" :key="navitem.key">
        <img slot="icon" :src="navitem.name==selected? navitem.img: navitem.nosel">
        {{navitem.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'NavTab',
  data () {
    return {
      nav: [
        {name: '首页', link: '#/home', img: require('../../../assets/images/home_pagey.png'), nosel: require('../../../assets/images/home_pagen.png'), key: 1},
        {name: '兑换码', link: '#/404', img: require('../../../assets/images/redeem_code.png'), nosel: require('../../../assets/images/redeem_code.png'), key: 2},
        {name: '我的欣享', link: '#/500', img: require('../../../assets/images/I_enjoy_ity.png'), nosel: require('../../../assets/images/I_enjoy_itn.png'), key: 3}
      ],
      selected: ''
    }
  },
  props: {
    defaut: String
  },
  created () {
    if (this.defaut) {
      this.selected = this.defaut
    }
  }
}
</script>

<style lang="scss">
.my-navtab{
  display: flex;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  background: #fff;
  font-size: 0.01rem;
  color: #333333;
  .mint-tabbar{
    background: #fff;
  }
  .mint-tab-item{
    padding-bottom: 0;
    color: #333;
  }
  .mint-tab-item-icon{
    height: .21rem;
    width: .21rem;
    margin-bottom: 0;
    img{
      /*height: 100%;*/
      width: auto;
    }
  }
  .mint-tab-item-label{
      line-height: 0.22rem;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    background: #fff;
    .mint-tab-item-label{
      line-height: 0.22rem;
      color: #ff3b3d;
   }
  }
}
</style>
