// 引用axios
import axios from 'axios';

// axios 公共配置

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// http request 拦截器
//axios.interceptors.request.use(
//config => {
//  //渠道
//  if (store.state.token) {
//    config.headers.token = store.state.token;
//  }
//  return config;
//},
//err => {
//  return Promise.reject(err);
//});

export default axios;
