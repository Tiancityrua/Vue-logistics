import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)
import login from '../components/login/index'
import main from '../components/main/index'
import selectmawb from '../components/select/mawb/index'
import insertmawb from '../components/insert/mawb/index'

export const constantRoutermap=[
  {path:'/login',component: login},
  {path:'/',redirect:{path:'/login'}},
  {
  path:'/main',
  component: main,
  redirect:'/selectbill/mawb'
  },
  {
  path:'/selectbill',
  component:main,
  redirect:'/selectbill/mawb',
  children:[{
    path:'mawb',
    component:selectmawb,
    name:'selectmawb',
    meta:{title:'selectmawb'}
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
    meta:{role:'manager'},
    children:[{
      path:'mawb',
      component:insertmawb,
      name:'insertmawb',
      meta:{
        title:'insertmawb',
      }
    }
    ]
  }
]
