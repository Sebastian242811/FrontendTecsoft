import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'
import HomeCustomer from '../views/HomeCustomerPrincipal'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home/dealer/:id',
    name: 'HomeDealer',
    component: () => import('../views/HomeDealer')
  },
  ////////////////////////////////////////////////////////////
  // Customer
  ////////////////////////////////////////////////////////////
  {
    path: '/home/customer',
    name: 'HomeCustomer',
    component: () => import('../views/HomeCustomer'),
    children:[
      {
        path: '',
        name: 'HomeCustomerPrincipal',
        component: HomeCustomer
      },
      {
        path: 'findCompany',
        name: 'FindCompany',
        component: () => import('../components/FindCompanies')
      },
      {
        path: 'about',
        name: 'CustomerAbout',
        component: () => import('../views/About')
      },
      {
        path: '/companies/:id',
        name: 'ShipTerminal',
        component:  () => import('../components/ShipTerminal')
      }
    ]
  },
  {
    path: '/home/company/:id',
    name: 'HomeCompany',
    component: () => import('../views/HomeCompany')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
