import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginForm from '../views/LoginForm.vue'
import SignupForm from '../views/SignupForm.vue'
import Cart from '../views/Cart.vue'
import ProductDetail from '../views/ProductDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/signup',
    name: 'SignupForm',
    component: SignupForm
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product-detail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
