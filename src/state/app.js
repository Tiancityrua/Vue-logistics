import Cookies from 'js-cookie'

const app={
    state:{
        sidebar:{
            opened: !+Cookies.get('sidebarStatus')
        }
    },
    mutations:{
        SET_SIDEBAR:state=>{
            if(state.sidebar.opened){
                Cookies.set('sidebarStatus',1)
            }
            else{
                Cookies.set('sidebarStatus',0)
            }
            state.sidebar.opened = !state.sidebar.opened
        }
    },  
    actions:{
        setSidebar({commit}){
            commit('SET_SIDEBAR')
        }
    }
}

export default app 