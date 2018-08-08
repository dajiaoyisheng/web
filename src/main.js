// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './axios';
Vue.prototype.$ajxj = axios;
import 'es6-promise/auto'
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './vuex/store'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);
// main.css公共样式
import './css/main.css';
import VueLoading from 'vue-loading-template';
Vue.use(VueLoading);
import VCharts from 'v-charts';
Vue.use(VCharts);
import Mock from './mock';
if (process.env.NODE_ENV === 'development') {
  Mock.bootstrap();
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
