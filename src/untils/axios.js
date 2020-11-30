import axios from 'axios';


const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    withCredentials: false,
    headers: {  'Content-Type': 'application/json;charset=UTF-8' ,
                'Authorization': 'Bearer 65090c5a-e0c1-4525-98c0-cc872d611ae2'
            }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });



  // 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export function get(url,params={}){
    return new Promise((reslove,reject)=>{
        instance.get(url,{
            params
        }).then(res =>{
            reslove(res)
        }).catch(error =>{
            reject(error)
        })
    })
}

export function post(url,data,type='body'){
    return new Promise((reslove ,reject)=>{
        if(type==='body'){
            instance.post(url,{...data})
            .then(res =>{
                reslove(res)
            }).catch(error =>{
                reject(error)
            })
        }
        if(type==='params'){
            instance.post(url,null,{
                params:data
            })
            .then(res =>{
                reslove(res)
            }).catch(error =>{
                reject(error)
            })
        }   
    })
}
export default instance;