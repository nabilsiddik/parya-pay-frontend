import config from "@/config/config";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: config.baseUrl,
    withCredentials: true
})

axiosInstance.interceptors.request.use(function(config){
    return config
}, function(error){
    return Promise.reject(error)
})