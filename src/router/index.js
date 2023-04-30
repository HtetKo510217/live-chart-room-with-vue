import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chartroom from  '../views/Chartroom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path :'/chartroom',
      name : 'Chartroom',
      component: Chartroom
    }
  ]
})

export default router
