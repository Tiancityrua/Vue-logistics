import axiox from 'axios'

const ztc = axiox.create({
    baseURL: 'http://localhost:8080'
})
ztc.interceptors.response.use(res => {
    if (res.status !== 200 ) {
        return Promise.reject('')
    }
    console.log(res)
    return Promise.resolve(res)

})

export const getmaShips=params => {
    return ztc.get(`/freight/select/bill/mashipper`, {params}).then(res => res.data)
}
export const getmaConsignees=params=>{
    return ztc.get(`/freight/select/bill/maconsignee`, {params}).then(res => res.data)
}
export const selectmawb=params=>{
    return ztc.post(`/freight/select/bill/mawb`,params).then(res=>res.data)
}

export const insertmawb=params=>{
    return ztc.post(`/freight/insert/bill/mawb`,params).then(res=>res.data)
}

export const updatemawb=params=>{
    return ztc.post(`/freight/update/bill/mawb`,params).then(res=>res.data)
}

export const login=params=>{
    return ztc.post(`/freight/login/token`,params).then(res=>res.data)
}