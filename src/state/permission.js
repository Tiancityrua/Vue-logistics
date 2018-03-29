import {asyncRoutermap,constantRoutermap} from '../router/index'

function hasPermission(role,route){
    if(route.meta && route.meta.role){
        return role==route.meta.role
    }
    else{
        return true
    }
}



function filterAsyncrouter(asyncRoutermap,role){
    const accessedRouters=asyncRoutermap.filter(route=>{
        if(hasPermission(role,route)){
            if(route.children && route.children.length){
                route.children=filterAsyncrouter(route.children,role)
            }
            return true
        }
        return false
    }
    )
    return accessedRouters
}


const permission={
    state:{
        routers:constantRoutermap,
        addRouters:[]
    },
    mutations:{
        SET_ROUTERS: (state,routers)=>{
            state.addRouters=routers
            state.routers=constantRoutermap.concat(routers)
        }
    },
    actions:{
        Generateroutes({commit},data){
            return new Promise(resolve=>{
                const {role} =data
                let accessedRouters
                if(role==='manager'){
                    accessedRouters=asyncRoutermap
                }
                else{
                    accessedRouters=filterAsyncrouter(asyncRoutermap,role)
                }
                commit('SET_ROUTERS',accessedRouters)
                resolve()
            }
            )
        }
    }
}

export default permission