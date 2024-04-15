import axios from 'axios';
import { useUserStore } from '@/store';
import { ElMessage } from 'element-plus';

const BACKEND_URL: string = import.meta.env.VITE_APP_BACKEND_URL || '';

/**
 * Axios实例用于发送HTTP请求
 * 注意标注请求参数XxxProps和回复XxxPresponse的类型
 * `res.data` 为返回的结果数据，类型为XxxPresponse
 * 另有 `res.headers` 等可用
 * @example
 * import request from '@/lib/request';
 * import { LoginProps, LoginResponse } from '@/types/auth';

 * request
 *  .postForm<LoginResponse>('/api/login', <LoginProps>{
 *    username: username.value,
 *    password: password.value,
 *  })
 *  .then(res => {
 *    const resp = res.data;
 *    console.log(resp);
 *  });
 */
const request = axios.create({
  // baseURL: BACKEND_URL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  // timeout: 10000, // request timeout
});

// 请求拦截
request.interceptors.request.use(
  config => {
    // 请求之前修改config
    const user = useUserStore();

    // 默认请求参数要求为JSON格式
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    // 设置Token 用于认证
    if (user.getToken) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = `Bearer ${user.getToken}`;
    }

    // 修改URL，以支持临时使用其他接口 => 弃用 config 指定 baseURL 即可
    //  => 弃用 改用 '/api' proxy 解决跨域
    config.url = BACKEND_URL + config.url;

    // console.log('config:', config);
    // console.log('config:', config.headers);
    // console.log('BACKEND_URL:', BACKEND_URL);
    // console.log(import.meta.env.MODE);

    return config;
  },
  error => {
    // do something with request error
    // console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 回复拦截
request.interceptors.response.use(
  response => {
    const res = response.data;

    if (response.status !== 200) {
      // Element的Message
      ElMessage({
        message: res.data || 'Error',
        type: 'error',
        duration: 5 * 1000,
      });
      // console.log('error', res.data);

      return Promise.reject(new Error(res.data || 'Error'));
    }

    // 返回
    return response;
  },
  error => {
    console.log('err' + error); // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error.response);
  }
);

export default request;
