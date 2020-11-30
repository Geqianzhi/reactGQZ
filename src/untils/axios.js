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
export default instance;