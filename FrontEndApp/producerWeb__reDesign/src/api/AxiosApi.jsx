import axios from 'axios'
import { getCookie, setCookie } from '../hooks/reactCookie'
import { baseUrl, refreshRequestUrl } from './serverUrl';

const AxiosApi = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' }
});

// 요청 처리
AxiosApi.interceptors.request.use(
  config  => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');
    if (!accessToken || !refreshToken) {
      config.headers.accessToken = null;
      config.headers.refreshToken = null;
      return config;
    }

    if (config.headers && accessToken && refreshToken ) {
      config.headers.authorization = `Bearer ${accessToken}`;
      config.headers.Accept = "*/*, application/json, text/plain";
      return config;
    }
    // Do something before request is sent
    
    console.log('request start', config)
  },
  error  => {
    console.log("request error", error);
    return Promise.reject(error);
  }
);

// 반응 처리
AxiosApi.interceptors.response.use(
  response => {
    console.log("get response", response);
    return response
  },
  async (error) => {
    const originalRequest = error.config; 
    const refreshToken = await getCookie('refreshToken')
    const { data } = await axios.post(refreshRequestUrl, {}, {
      headers: { authorization: `Bearer ${refreshToken}` }
    });
    const [newAccessToken, newRefreshToken ] = data
    setCookie('accessToken', newAccessToken);
    setCookie('refreshToken', newRefreshToken);
    originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
    return axios(originalRequest)
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
);

export default AxiosApi