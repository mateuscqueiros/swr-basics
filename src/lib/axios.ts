import Axios from 'axios';

export type ProductMutationType = {
  title: string
}

export const axios = Axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 10000,
  params: {
    delay: 1000
  },
})

export async function axiosGet(url: string) {
  return axios.get(url).then((response) => response.data);
}

export async function axiosPost(url: string, data?: ProductMutationType, params?: any) {
  return axios.post(url, data, params).then((response) => response.data);
}

export async function axiosPut(url: string, data?: ProductMutationType, params?: any) {
  return axios.put(url, data, params).then((response) => response.data);
}

export async function axiosDelete(url: string) {
  return axios.put(url).then((response) => response.data);
}
