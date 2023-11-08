<template>
  <div id="app">
    <!-- 头部组件 -->
    <HeaderComponent />
    <!-- body占位标签 -->
    <router-view />
    <!-- 底部导航组件 -->
    <FooterNav />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterNav from "./components/FooterNav.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterNav,
  },
  methods: {
    getData() {
      // this.$http.get("http://localhost:7070/getTest1").then((response) => {console.log(response)});
      console.log(this);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
