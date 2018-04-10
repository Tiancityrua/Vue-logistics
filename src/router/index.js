import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)
import login from '../components/login/index'
import main from '../components/main/index'
import selectmawb from '../components/select/mawb/index'
import insertmawb from '../components/insert/mawb/index'
import insertinvoice from '../components/insert/invoice/index'
import selectinvoice from '../components/select/invoice/index'

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
        title:'insertmawb',
        role:'manager'
      }
    },
    {
      path:'select',
      component:selectmawb,
      name:'selectmawb',
      meta:{
        title:'selectmawb',
      }
    }
    ]
  },
  {
    path:'/invoice',
    component:main,
    redirect:'/invoice/select',
    meta:{title:'invoice'},
    children:[
      {
        path:'insert',
        component:insertinvoice,
        name:'insertinvoice',
        meta:{
          title:'insertinvoice',
          role:'manager'
        }
      },
      {
        path:'select',
        component:selectinvoice,
        name:'selectinvoice',
        meta:{
          title:'selectinvoice'
        }
      }
    ]
  }
]
