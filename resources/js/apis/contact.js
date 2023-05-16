import { resource_admin_api, Axios } from "./adminApi"
const resource = 'contact'

export const contactAdd = (payload) => Axios.post(`${resource_admin_api}/${resource}/add`, payload)
export const contactEdit = (payload) => Axios.post(`${resource_admin_api}/${resource}/edit`, payload)
export const contactList = (keyword) => Axios.get(`${resource_admin_api}/${resource}/list?keyword=${keyword}`)
export const contactGet = (id) => Axios.get(`${resource_admin_api}/${resource}/get/${id}`)