import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SeaShipments from '../views/SeaShipments.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/sea-shipmentS',
      name: 'SeaShipments',
      component: SeaShipments
    }
  ]
})

export default router
