<template>
  <div id="order-list">
    <header>
      <div class="seach-box">
        <input type="text" />
        <b></b>
      </div>
    </header>
    <div class="order-box">

    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList'
}
</script>

<style scoped lang="scss">
#order-list{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f1f5f9;
  header{
    height: 0.45rem;
    background: #fff;
    box-sizing: border-box;
    padding: 0 0.15rem;
    .seach-box{
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      border-radius: 8px;
      input{
        height: 0.3rem;
        line-height: 0.3rem;
      }
    }
  }
  .order-box{
    flex: 1;
  }
}
</style>
