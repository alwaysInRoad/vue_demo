import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import './login.js' 
import './ui.js'
import config from './lib/config';
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(config);

var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


