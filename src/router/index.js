import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import('@/page/index.vue')
// const Login = () => import('/page/Login/login.vue')
// const Register = () => import('/page/Login/register.vue')
const Home = () => import('@/page/Home/home.vue')
const GoodS = () => import('@/page/Goods/goods.vue')
// const goodsDetails = () => import('/page/Goods/goodsDetails.vue')
// const Thanks = () => import('/page/Thanks/thanks.vue')
// const RefreshGoods = () => import('/page/Refresh/refreshgoods.vue')
// const Cart = () => import('/page/Cart/cart.vue')
// const RefreshSearch = () => import('/page/Refresh/refreshsearch.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index',
    redirect: '/home',
    children: [
      {path: 'home', component: Home},
      {path: 'goods', component: GoodS},
      // {path: 'goodsDetails', name: 'goodsDetails', component: goodsDetails},
      // {path: 'thanks', name: 'thanks', component: Thanks},
      // {path: '/refreshgoods', name: 'refreshgoods', component: RefreshGoods}
    ]
  },
  // {path: '/login', name: 'login', component: Login},
  // {path: '/register', name: 'register', component: Register},
  // {path: '/cart', name: 'cart', component: Cart},
  // {path: '/refreshsearch', name: 'refreshsearch', component: RefreshSearch},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
