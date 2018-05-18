import {getToken,setToken,removeToken} from '../util/auth'
import {login,getinfo} from '../util/api'
import { Message } from 'element-ui'

const user={
    state:{
        token:getToken(),
        username:'',
        role:''
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token=token
        },
        SET_NAME:(state,username)=>{
            state.username=username
        },
        SET_ROLE:(state,role)=>{
            state.role=role
        }

    },
    actions:{
        Login({commit},userinfo){
            const username=userinfo.username.trim()
            return new Promise((resolve,reject)=>{
               login(userinfo).then(response=>{
                    const data=response
                    if(data.code===200){
                    Message.success('Login Success')
                    setToken(data.token)
                    commit('SET_TOKEN',data.token)
                    resolve()
                    }
                    else{
                        Message.error('Username/Password Error')
                        return false
                    }
                }
                ).catch(error=>{
                    reject(error)
                })
            }
            )
        },
        Getinfo({commit,state}){
            var token={
                'token':state.token
            }
            return new Promise((resolve,reject) =>{
                getinfo(token).then(response=>{
                    const data=response
                    commit('SET_ROLE',data.role)
                    commit('SET_NAME',data.username)
                    resolve(response)
                }
                ).catch(error=>{
                    reject(error)
                })
            }
            )

        },
        Logout({commit}){
            return new Promise(resolve=>{
                commit('SET_TOKEN','')
                removeToken()
                resolve()
            }
            )
        }
    }
}
export default user