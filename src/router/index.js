import { createRouter, createWebHistory } from 'vue-router'
import todoApp from '../views/TodoApp.vue'
import bookAPIView from '../views/BookAPIView.vue'
import CalendarAPPView from '../views/CalendarAPPView.vue'
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
  },
  {
    path:'/CalendarAPPView',
    name:'CalendarAPPView',
    component: CalendarAPPView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
