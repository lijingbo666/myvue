import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './common/index.css'
import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont.js';

Vue.prototype.$http = axios;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
