import { baseURL } from '../config'
import axios from 'axios'
import requestFn from './requestFn'
import responseFn from './responseFn'

export default async function fetch (option: any) {
  let instance = axios.create({
    baseURL
  })
  instance.interceptors.request.use(requestFn.interceptors, requestFn.errors)
  instance.interceptors.response.use(responseFn.interceptors, responseFn.errors)
  let res = await instance.request(option)

  return res
}
