import Vue from 'vue';
import router from './src/router/index';
import store from './src/state/index';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './src/App.vue';
import './src/asset/styles/index.less';
import * as $api from './src/util/api'
import './permission'
import i18n from './src/language'


Vue.use(ElementUI,{
    size:'medium',
    i18n:(key,value)=>i18n.t(key,value)
});

Vue.prototype.$api=$api;

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  i18n,
  components: {
    App
  }
});
