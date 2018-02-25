import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)
import login from '../components/login/index'
import main from '../components/main/index'
import selectmawb from '../components/select/mawb/index'
import insertmawb from '../components/insert/mawb/index'

export const constantRoutermap=[
  {path:'/login',component: login,hidden:true},
  {path:'/',redirect:{path:'/login'},hidden:true},
  {
  path:'/main',
  component: main,
  redirect:'/selectbill/mawb',
  hidden:true
  },
  {
  path:'/selectbill',
  component:main,
  redirect:'/selectbill/mawb',
  meta:{title:'bill_select'},
  children:[
  {
    path:'mawb',
    component:selectmawb,
    name:'selectmawb',
    meta:{title:'selectmawb'}
  },
  {
    path:'hawb',
    component:selectmawb,
    name:'selecthawb',
    meta:{title:'selecthawb'}
  }
  ]
  }
]

export default new Router({
  routes:constantRoutermap
}
)

export const asyncRoutermap=[
  {
    path:'/insertbill',
    component:main,
    redirect:'/insertbill/mawb',
    meta:{role:'manager',title:'bill_insert'},
    children:[
    {
      path:'mawb',
      component:insertmawb,
      name:'insertmawb',
      meta:{
        title:'insertmawb',
      }
    },
    {
      path:'hawb',
      component:insertmawb,
      name:'inserthawb',
      meta:{
        title:'inserthawb'
      }
    }
    ]
  }
]
