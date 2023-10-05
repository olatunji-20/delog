import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SeaShipments from '../views/SeaShipments.vue'
import AirShipments from '../views/AirShipments.vue'
import ContactUs from '../views/ContactUs.vue'

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
    },
    {
      path: '/air-shipments',
      name: 'AirShipments',
      component: AirShipments
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    }
  ],
  scrollBehavior(stand, homepage, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      left: 0, top: 0
    }
  }
})

export default router
