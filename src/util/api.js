import axiox from 'axios'

const ztc = axiox.create({
    baseURL: 'http://localhost:8080'
})
const print=axiox.create({
    baseURL: 'http://localhost:8080',
    responseType:'arraybuffer'
})
ztc.interceptors.response.use(res => {
    if (res.status !== 200 ) {
        return Promise.reject('')
    }
    console.log(res)
    return Promise.resolve(res)

})

export const gethaShips=params => {
    return ztc.get(`/freight/select/bill/hashipper`, {params}).then(res => res.data)
}

export const gethaConsignees=params=>{
    return ztc.get(`/freight/select/bill/haconsignee`, {params}).then(res => res.data)
}

export const selecthawb=params=>{
    return ztc.post(`/freight/select/bill/hawb`,params).then(res=>res.data)
}

export const inserthawb=params=>{
    return ztc.post(`/freight/insert/bill/hawb`,params).then(res=>res.data)
}

export const updatehawb=params=>{
    return ztc.post(`/freight/update/bill/hawb`,params).then(res=>res.data)
}

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

export const getinfo=params=>{
    return ztc.post(`/freight/login/userinfo`,params).then(res=>res.data)
}

export const insertinvoice=params=>{
    return ztc.post(`/freight/insert/invoice/invoice`,params).then(res=>res.data)
}

export const insertdetail=params=>{
    return ztc.post(`/freight/insert/invoice/detail`,params).then(res=>res.data)  
}

export const selectinvoice=params=>{
    return ztc.post(`/freight/select/invoice/invoice`,params).then(res=>res.data)  
}

export const selectdetail=params=>{
    return ztc.post(`/freight/select/invoice/detail`,params).then(res=>res.data)  
}

export const selectmaplace=params=>{
    return ztc.post(`/freight/select/bill/maplace`,params).then(res=>res.data)  
}

export const insertnote=params=>{
    return ztc.post(`/freight/insert/invoice/delivery`,params).then(res=>res.data) 
}

export const selectnote=params=>{
    return ztc.post(`/freight/select/invoice/delivery`,params).then(res=>res.data) 
}

export const updatenote=params=>{
    return ztc.post(`/freight/update/invoice/delivery`,params).then(res=>res.data) 
}

export const updateinvoice=params=>{
    return ztc.post(`/freight/update/invoice/invoice`,params).then(res=>res.data) 
}

export const updatedetail=params=>{
    return ztc.post(`/freight/update/invoice/detail`,params).then(res=>res.data) 
}

export const selecthaplace=params=>{
    return ztc.post(`/freight/select/bill/haplace`,params).then(res=>res.data) 
}

export const selectsame=params=>{
    return ztc.post(`/freight/select/bill/same`,params).then(res=>res.data) 
}

export const selectno=params=>{
    return ztc.post(`/freight/select/invoice/no`,params).then(res=>res.data) 
}

export const deletemawb=params=>{
    return ztc.post(`/freight/delete/bill/mawb`,params).then(res=>res.data) 
}

export const deletehawb=params=>{
    return ztc.post(`/freight/delete/bill/hawb`,params).then(res=>res.data) 
}

export const deleteinvoice=params=>{
    return ztc.post(`/freight/delete/invoice/invoice`,params).then(res=>res.data) 
}

export const deletenote=params=>{
    return ztc.post(`/freight/delete/invoice/note`,params).then(res=>res.data) 
}

export const printinvoice=params=>{
    return print.post(`/freight/print/invoice/invoice`,params)
}

export const printhawb=params=>{
    return print.post(`/freight/print/bill/hawb`,params)
}

export const purchasesinvoice=params=>{
    return print.post(`/freight/business/invoice/invoice`,params)
}

export const debtorsinvoice=params=>{
    return print.post(`/freight/business/invoice/debtors`,params)
}

export const creditorsinvoice=params=>{
    return print.post(`/freight/business/invoice/creditors`,params)
}
