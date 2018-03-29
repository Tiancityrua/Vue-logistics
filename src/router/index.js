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
  redirect:'/mawb/select',
  hidden:true
  }
]

export default new Router({
  routes:constantRoutermap
}
)

export const asyncRoutermap=[
  {
    path:'/mawb',
    component:main,
    redirect:'/mawb/select',
    meta:{title:'mawb'},
    children:[
    {
      path:'insert',
      component:insertmawb,
      name:'insertmawb',
      meta:{
        title:'insert',
        role:'manager'
      }
    },
    {
      path:'select',
      component:selectmawb,
      name:'selectmawb',
      meta:{
        title:'select',
      }
    }
    ]
  },
  // {
  //   path:'/selectbill',
  //   component:main,
  //   redirect:'/selectbill/mawb',
  //   meta:{title:'bill_select'},
  //   children:[
  //   {
  //     path:'mawb',
  //     component:selectmawb,
  //     name:'selectmawb',
  //     meta:{title:'selectmawb'}
  //   },
  //   {
  //     path:'hawb',
  //     component:selectmawb,
  //     name:'selecthawb',
  //     meta:{title:'selecthawb'}
  //   }
  //   ]
  //   }
]
