import Vue from 'vue';
import Vuex from 'vuex';
import user from './user'
import getters from './getters'
import app from './app'
import permission from './permission'

Vue.use(Vuex)

const store= new Vuex.Store({
 modules:{
  user,
  app,
  permission
 },
 getters
})
export default store