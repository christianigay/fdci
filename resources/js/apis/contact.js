import { resource_admin_api, Axios } from "./adminApi"
const resource = 'contact'

export const contactAdd = (payload) => Axios.post(`${resource_admin_api}/${resource}/add`, payload)
export const contactEdit = (id, payload) => Axios.post(`${resource_admin_api}/${resource}/${id}/edit`, payload)
export const contactDelete = (id) => Axios.post(`${resource_admin_api}/${resource}/${id}/delete`)
export const contactList = (keyword, page = 1) => Axios.get(`${resource_admin_api}/${resource}/list?keyword=${keyword}&per_page=20&page=${page}`)
export const contactGet = (id) => Axios.get(`${resource_admin_api}/${resource}/get/${id}`)