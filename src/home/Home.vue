<template>
  <div id="Home">
    <div id="address">
      <em class="iconfont icon-weizhi"></em>
      <span>河南省与苏州市</span>
      
    </div>
    首页页面
    
  </div>

</template>
<script>
export default {
  name: "Home",
  methods: {
    getData() {},
  },
};
</script>
<style lang="scss" scoped>
#Home{
  width: 100%;
  height: auto;
  overflow: hidden;
  #address{
    width: 100%;
    height: 28px;
    line-height: 28px;
    text-align: left;
    padding: 0 10px;
    box-sizing: border-box;
    .icon-weizhi{
      font-size: 18px;
      color: aquamarine;
      margin-right: 10px;
    }
    sp
  }
}
</style>