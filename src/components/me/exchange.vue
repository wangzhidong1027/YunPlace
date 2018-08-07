<template>
  <div id="exchange">
      <div class="content">
        <div class="input-box">
          <mt-field  placeholder="请输入兑换码" type="text" v-model="code" :attr="{ maxlength: 32 }"></mt-field>
        </div>
        <div class="btn-active">
          <div class="btn">激活</div>
          <p>提示：点击【激活】，即可进去商场兑换</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ExChange',
  data () {
    return {
      code: ''
    }
  }
}
</script>

<style scoped lang="scss">
#exchange{
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 0 0.37rem;
  box-sizing: border-box;
  background: #f1f5f9;
  .content{
    margin-top: 1rem;
   .input-box{
     background: #f1f5f9;
     border-radius: 6px;
     overflow: hidden;
     input::-webkit-input-placeholder{ color: #d7d7d7; }
     input:-ms-input-placeholder{ color: #d7d7d7; }
     input::-moz-placeholder{ color: #d7d7d7;}
   }
    .btn-active{
      .btn{
        margin-top: 0.25rem;
        width: 100%;
        border: none;
        line-height: 0.5rem;
        background: #ff3b3d;
        border-radius: 6px;
        color: #fff;
        font-size: 0.18rem;
        letter-spacing: 3px;
        text-align: center;
      }
    }
    p{
      font-size: 0.12rem;
      color: #999999;
      text-align: center;
      line-height: 0.45rem;
    }
  }
}
</style>
