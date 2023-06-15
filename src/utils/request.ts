import axios from 'axios';

// 初始化基本配置
const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use(config => {
  return config;
})

// 添加响应拦截器
request.interceptors.response.use(response => {
  return response;
})

export default request;