import Main from '@/views/Main'
import Products from '@/views/Products'



import { createRouter, createWebHistory } from 'vue-router'

const routes = [
   {
      path: '/',
      component: Main
   },
   {
      path: '/products',
      component: Products
   },
]

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
}
)
export default router;