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
  const { trigger, ...rest } = useSWRMutation(`/products`, (_, data) => axiosPost(`/products/add`, data.arg))

  return {
    createProduct: trigger,
    ...rest
  }
}

export function useUpdateProduct(id: number) {
  const { trigger, ...rest } = useSWRMutation(`/products`, (_, data) => {
    console.log(data.arg)
    return axiosPut(`/products/${id}`, data.arg, { id })
  })

  return {
    updateProduct: trigger,
    ...rest
  }
}

export function useDeleteProduct(id: number) {
  const { trigger, ...rest } = useSWRMutation(`/products`, (_) => axiosDelete(`/products/${id}`))

  return {
    deleteProduct: trigger,
    ...rest
  }
}
