import router from './src/router'
import store from './src/state'
import {Message} from 'element-ui'
import {getToken} from './src/util/auth'

const whitelist=['/login']

router.beforeEach((to,from,next)=>{
    if(getToken()){ 
        if(to.path==='/login'){
            next({path:'/main'})
        }
        else{
            if(store.getters.role===''){
                store.dispatch('Getinfo').then(res=>{
                    const role=res.role
                    store.dispatch('Generateroutes',{role}).then(()=>{
                        router.addRoutes(store.getters.addRouters)
                        next({ ...to,replace:true})
                    }
                    )
                }
                ).catch(()=>{
                    store.dispatch('Logout').then(()=>{
                        Message.error('验证失败，请重新登录！')
                        next({path:'/login'})
                    }
                    )
                })
            }
            else{
                next()
            }
        } 
    }
    else{
        if(whitelist.indexOf(to.path)!== -1){
            next()
        }
        else{
            next('/login')
        }
    }
}
)