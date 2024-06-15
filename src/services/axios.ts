import Axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { ErrorToast } from '@/utils/toast';
import toast from 'react-hot-toast';
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

const axiosConfiguration = (config: AxiosRequestConfig) => {
  const token = JSON.parse(sessionStorage.getItem('admin') as string);
  if (token)
    config.headers = {
      ...(config.headers || {}),
      Authorization: token
    };
  return config;
};

axios.interceptors.request.use(axiosConfiguration as any);

axios.interceptors.response.use(
  (res: any) => {
    if (res.data.status === false) toast.error(res.data.message)
    if (res.data.status === true) toast.success(res.data.message)
    return res;
  },
  async (error: any) => {
    // if (
    //   error instanceof AxiosError &&
    //   error.response?.status === 401 &&
    //   error.response?.data?.message === 'Unauthorized'
    // ) {
    //   window.location.href = '/';
    //   return;
    // }
    // if (error instanceof AxiosError && error.response?.status === 400) {
    //   ErrorToast(error.response?.data?.message);
    //   return;
    // }
    // if (error instanceof AxiosError && error.response?.status === 403) {
    //   ErrorToast(error.response?.data?.message);
    //   return;
    // }
    // ErrorToast(error.response?.data?.message);
    // return Promise.reject(error);
  }
);

export default axios;
