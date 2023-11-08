<template>
  <div id="HeaderComponent">
    <div class="topBox">
      <em class="iconfont icon-back"></em>
      <span>首页</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<style lang="scss" scoped>
#HeaderComponent {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-bottom: 1px solid #eee;
  width: 100%;
  text-align: center;
  .topBox {
    overflow: hidden;
    position: relative;
    em {
      font-size: 26px;
      position: absolute;
      top: 0;
      left: 15px;
    }
    span {
      font-size: 18px;
    }
  }
}
</style>