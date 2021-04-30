import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import('@/page/index.vue')
const Login = () => import('@/page/Login/login.vue')
const Register = () => import('@/page/Login/register.vue')
const Home = () => import('@/page/Home/home.vue')
const GoodS = () => import('@/page/Goods/goods.vue')
const goodsDetails = () => import('@/page/Goods/goodsDetails.vue')
const RefreshGoods = () => import('@/page/Refresh/refreshgoods.vue')
const Cart = () => import('@/page/Cart/cart.vue')
const checkout = () => import('@/page/Checkout/checkout.vue')
const user = () => import('@/page/User/user.vue')
const orderList = () => import('@/page/User/children/order.vue')
const orderDetail = () => import('@/page/User/children/orderDetail.vue')
const information = () => import('@/page/User/children/information.vue')
const addressList = () => import('@/page/User/children/addressList.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index',
    redirect: '/home',
    meta:{
      title: '首页'
    },
    children: [
      {
        path: 'home',
        component: Home,
        meta:{
          title: 'Kayn商城'
        }
      },
      {
        path: 'goods',
        component: GoodS,
        meta:{
          title: '全部商品'
        }},
      {
        path: 'goodsDetails',
        name: 'goodsDetails',
        component: goodsDetails,
        meta:{
          title: '商品详情页'
        }
      },
      {path: '/refreshgoods', name: 'refreshgoods', component: RefreshGoods},
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta:{
          title: '我的购物车'
        }},
      {
        path: '/checkout',
        name: 'checkout',
        component: checkout,
        meta:{
          title: '我的订单'
        }},
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    redirect: '/user/information',
    children: [
      {path: 'orderList', name: '订单列表', component: orderList},
      {path: 'orderDetail', name: '订单详情', component: orderDetail},
      {path: 'information', name: '账户资料', component: information},
      {path: 'addressList', name: '收货地址', component: addressList},
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title: '登录页'
    }
  },
  {path: '/register', name: 'register', component: Register},
  {path: '*', redirect: '/home'}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
