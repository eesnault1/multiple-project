import { createRouter, createWebHistory } from 'vue-router'
import todoApp from '../views/TodoApp.vue'
import bookAPIView from '../views/BookAPIView.vue'

const routes = [
  {
    path: '/todoApp',
    name: 'todo',
    component: todoApp
  },
  {
    path:'/bookAPIView',
    name:'bookAPIView',
    component: bookAPIView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
