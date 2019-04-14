import fly from 'flyio'

fly.config.timeout = 15000 //超时时间
// fly.config.baseURL = '' //请求基地址

fly.interceptors.request.use((request)=>{
    return request
})

fly.interceptors.response.use(
    (response) => {
        return response.data
    },
    (err) => {
    }
)

export default fly