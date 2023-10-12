import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SeaShipments from '../views/SeaShipments.vue'
import AirShipments from '../views/AirShipments.vue'
import ContactUs from '../views/ContactUs.vue'
import Company from '../views/Company.vue'
import Values from '../views/Values.vue'
import BlogPost from '../views/BlogPost.vue'
import BlogsView from '../views/BlogsView.vue'

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
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/blog-post',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/values',
      name: 'Values',
      component: Values
    },
    {
      path: '/blogs-view/:id',
      name: 'BlogsView',
      component: BlogsView
    }
  ],
  scrollBehavior(stand, homepage, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      left: 50, top: 0
    }
  }
})

export default router
