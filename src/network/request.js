import axios from 'axios';

const BASE_URL = 'https://api.apiopen.top';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use( res => {
    // 发送前做的事
    return res;
}, err => {
    // 请求错误做的事
    return Promise.reject(err);
});

// 响应拦截
instance.interceptors.response.use( res => {
    // 请求成功
    return res.data;
}, err => {
    // 请求失败
    return Promise.reject(err);
});

export default instance;