import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/Pages/Products'
import CustomerOrder from '@/components/pages/CustomOrders'
import Customer_checkout from '@/components/pages/checkOut'
import Coupons from '@/components/pages/Coupons'
import Orders from '@/components/pages/Orders'
import Index from '@/components/Index'
import ProductsList from '@/components/ProductsList'
import Cart from '@/components/Cart'
import CustomerData from '@/components/CustomerData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        }
      ]
    },
    {
      path: '/customer_checkOut/:orderId',
      name: 'Customer_checkout',
      component: Customer_checkout,
    },
    {
      path: '/productslist',
      name: 'ProductsList',
      component: ProductsList
    },    
    {
      path: '/customerdata',
      name: 'CustomerData',
      component: CustomerData
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
      ]
    },
  ]
})
