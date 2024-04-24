import Axios from 'axios';

export type ProductMutationType = {
  arg: {
    title: string
  }
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

export async function axiosPost(url: string, { arg }: ProductMutationType) {
  return axios.post(url, arg).then((response) => response.data);
}

export async function axiosPut(url: string, { arg }: ProductMutationType) {
  return axios.put(url, arg).then((response) => response.data);
}

export async function axiosDelete(url: string) {
  return axios.put(url).then((response) => response.data);
}
