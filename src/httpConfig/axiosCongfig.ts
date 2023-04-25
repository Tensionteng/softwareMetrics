import axios, { InternalAxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 在发送请求之前做些什么
        // 一般来说是设置token，这里略
        console.log("发送请求");
        return config;
    },
    (error: any) => {
        // 处理请求错误
        ElMessage({
            type: 'error',
            message: '请求错误'
        })
        return Promise.reject(error);
    },
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {

        // 对响应数据做点什么
        // 一般来说是检查json格式，这里略
        console.log("接收到请求");
        return response;
    },
    (error: any) => {
        // 处理响应错误
        // 一般来说是重定向，这里略
        return Promise.reject(error);
    },
);

export default axiosInstance;


