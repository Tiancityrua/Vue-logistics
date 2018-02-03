import Vue from 'vue';
import Router from 'vue-router';
import routers from '../components'

let routes = routers.map(item => {
  return {
    path: `/${item.name}`,
    name: item.name,
    component: item
  }
})
routes = routes.concat({
  path: '/',
  name: 'home',
  redirect:  {
    name: 'svg'
  }
})

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes
})