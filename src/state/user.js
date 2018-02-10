import {getToken,setToken,removeToken} from '../util/auth'

const user={
    state:{
        token:getToken(),
        name:'',
        role:''
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token=token
        },
        SET_NAME:(state,name)=>{
            state.name=name
        },
        SET_ROLE:(state,role)=>{
            state.role=role
        }

    },
    actions:{
        Login({commit},userinfo){
            debugger
            const username=userinfo.username.trim()
            return new Promise((resolve,reject)=>{
                this.$api.login(userinfo).then(response=>{
                    const data=response
                    setToken(data.token)
                    commit('SET_TOKEN',data.token)
                    resolve()
                }
                ).catch(error=>{
                    reject(error)
                })
            }
            )
        }
    }
}
export default user