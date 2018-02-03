import Vue from 'vue';
import router from './src/router/index';
import vuex from './src/state/index';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './src/App.vue';
import './src/asset/styles/index.less';
import axios from 'axios'
import qs from 'query-string'
import * as $api from './src/util/api'

Vue.use(ElementUI);
Vue.prototype.$axios=axios;
Vue.prototype.$api=$api;
Vue.prototype.qs=qs;
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  vuex,
  components: {
    App
  }
});
