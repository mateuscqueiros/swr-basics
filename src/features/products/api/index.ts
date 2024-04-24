import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../../../lib/axios";

export function useProducts() {
  return useSWR("/products", axiosGet);
}

export function useCreateProduct() {
  return useSWRMutation(`/products/add`, axiosPost)
}

export function useUpdateProduct(id: number) {
  return useSWRMutation(`/products/${id}`, axiosPut)
}

export function useDeleteProduct(id: number) {
  return useSWRMutation(`/products/${id}`, axiosDelete)
}
