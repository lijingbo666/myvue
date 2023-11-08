<template>
  <div id="FooterNav">
    <ul>
      <li
        v-for="(item, index) in navList"
        :key="index"
        @click="openPage(item.url)"
        :class="thePath == item.url ? 'active' : ''"
      >
        <em :class="'iconfont icon-' + item['icon']"></em
        ><span>{{ item["name"] }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "FooterNav",
  data() {
    return {
      navList: [
        {
          name: "首页",
          icon: "home",
          url: "/home",
        },
        {
          name: "订单",
          icon: "quanbudingdan",
          url: "/orders",
        },
        {
          name: "论坛",
          icon: "luntan",
          url: "/forum",
        },
        {
          name: "我的",
          icon: "wode",
          url: "/user",
        },
      ],
      thePath: this.$route.path,
    };
  },
  methods: {
    openPage(url) {
      this.thePath = url;
      if (url == this.$route.path) {
        this.$router.go(0);
      } else {
        this.$router.push(url);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#FooterNav {
  width: 100%;
  height: 50px;
  padding: 10px 0;
  background: #fff;
  border-top: 1px solid #eee;
  position: fixed;
  bottom: 0;
  left: 0;

  ul {
    width: 100%;
    overflow: hidden;
    height: 100%;
    li {
      width: 25%;
      float: left;
      text-align: center;
      &:first-child em,
      &:last-child em {
        font-weight: bold;
      }
      &.active{
        em,span{
          color: rgb(65, 65, 243);
        }
      }
      em {
        display: inline-block;
        font-size: 25px;
        font-weight: normal;
      }
      span {
        display: block;
      }
    }
  }
}
</style>