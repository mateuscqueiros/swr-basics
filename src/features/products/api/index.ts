import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../../../lib/axios";

export function useProducts() {
  const { data, ...rest } = useSWR("/products", axiosGet);

  return {
    products: data,
    ...rest
  }
}

export function useCreateProduct() {
  const { trigger, ...rest } = useSWRMutation(`/products/add`, axiosPost)

  return {
    createProduct: trigger,
    ...rest
  }
}

export function useUpdateProduct(id: number) {
  const { trigger, ...rest } = useSWRMutation(`/products/${id}`, axiosPut)

  return {
    updateProduct: trigger,
    ...rest
  }
}

export function useDeleteProduct(id: number) {
  const { trigger, ...rest } = useSWRMutation(`/products/${id}`, axiosDelete)

  return {
    deleteProduct: trigger,
    ...rest
  }
}
