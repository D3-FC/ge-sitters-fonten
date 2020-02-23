import { Container } from 'typedi'
import { Auth, LoggerService, StorageService, UserRepoService } from '@aeq/client-http-auth'
import { Config } from '../config/Config'
import axios from 'axios'
import { GlobalStore } from '../store/theGlobalStore'
import { HttpService } from '@aeq/api-laravel'
import { UserRepo } from '../components/User/UserRepo'
import { User } from '../components/User/User'

export default ({ app, Vue }: any) => {
  const config = Container.get(Config)
  const store = Container.get(GlobalStore)

  const axiosInstance = axios.create({
    baseURL: config.apiUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  axiosInstance.interceptors.request.use((config: any) => {
    const token = store.auth.getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${store.auth.getAccessToken()}` // TODO: do not keep token in storage, Move to cookie auth
    }
    return config
  }, function (error: any) {
    return Promise.reject(error)
  })

  Container.set(StorageService, localStorage)
  Container.set(LoggerService, null)
  Container.set(HttpService, axiosInstance)
  Container.set({ id: UserRepoService, type: UserRepo })

  Vue.data = {
    store
  }

  store.auth = Container.get(Auth) as Auth<User>
}
