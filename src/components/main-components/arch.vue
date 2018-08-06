<template>
  <div class="circle">

  </div>
</template>

<script>
export default {
  name: 'Arch'
}
</script>

<style scoped lang="scss">
.circle{
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: linear-gradient(to right, #ff8842, #ff2232);
  position: absolute;
  left: 50%;
  bottom: .57rem;
  margin-left: -4.5rem;
  animation: arch 3s linear infinite;
  z-index: -10;
}
@keyframes arch {
  0%{transform:rotate(0deg);}
  50% {transform:rotate(180deg);}
  100% {transform:rotate(360deg);}
}
</style>
