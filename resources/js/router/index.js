import { createRouter,createWebHistory} from 'vue-router'
import home from './home'
import contact from './contact'
import auth from './auth'
import Axios from 'axios'

const routes = [
    ...home,
    ...auth,
    ...contact
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const baseURL = import.meta.env.VITE_APP_URL;
  Axios.get(`${baseURL}/api/admin/auth/check-user`).then(({data})=>{
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!data) {
        next({
          name: 'auth-login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
})

export default router