import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dealer',
    name: 'AppDealer',
    component: () => import('../views/AppDealer'),
    children: [
      {
        path: 'home',
        name: 'HomeDealerPrincipal',
        component: () => import('../views/HomeDealer')
      },
      {
        path: 'delivery',
        name: 'Delivery',
        component: () => import('../components/Delivery')
      }
    ]
  },
  ////////////////////////////////////////////////////////////
  // Customer
  ////////////////////////////////////////////////////////////
  {
    path: '/customer',
    name: 'AppCustomer',
    component: () => import('../views/AppCustomer'),
    children:[
      {
        path: 'home',
        name: 'HomeCustomerPrincipal',
        component: () => import('../views/HomeCustomer')
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
        path: 'state',
        name: 'StatePackage',
        component: () => import('../components/PackageState')
      }
    ]
  },

  {
    path: '/company/:id',
    name: 'HomeCompany',
    component: () => import('../views/AppCompany')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
