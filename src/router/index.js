import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)
import login from '../components/login/index'
import main from '../components/main/index'
import selectmawb from '../components/select/mawb/index'
import insertmawb from '../components/insert/mawb/index'
import insertinvoice from '../components/insert/invoice/index'
import selectinvoice from '../components/select/invoice/index'
import insertnote from '../components/insert/note/index'
import selectnote from '../components/select/note/index'
import inserthawb from '../components/insert/hawb/index'
import selecthawb from '../components/select/hawb/index'

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
    path:'/hawb',
    component:main,
    redirect:'/hawb/select',
    meta:{title:'hawb'},
    children:[
    {
      path:'insert',
      component:inserthawb,
      name:'inserthawb',
      meta:{
        title:'inserthawb',
        role:'manager'
      }
    },
    {
      path:'select',
      component:selecthawb,
      name:'selecthawb',
      meta:{
        title:'selecthawb',
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
  },
  {
    path:'/note',
    component:main,
    redirect:'/note/select',
    meta:{title:'note'},
    children:[
      {
        path:'insert',
        component:insertnote,
        name:'insertnote',
        meta:{
          title:'insertnote',
          role:'manager'
        }
      },
      {
        path:'select',
        component:selectnote,
        name:'selectnote',
        meta:{
          title:'selectnote'
        }
      }
    ]
  }
]
