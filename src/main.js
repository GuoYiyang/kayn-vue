import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {userInfo} from "@/api";
import {getStore} from "@/utils/storage";
Vue.config.productionTip = false

// 不需要登陆的页面
const whiteList = ['/home', '/goods', '/login', '/register', '/goodsDetails', '/refreshgoods']
router.beforeEach(function (to, from, next) {
  let params = {
    params: {
      token: getStore('token')
    }
  }
  userInfo(params).then(res => {
    if (res.result == null) { // 没登录
      if (whiteList.indexOf(to.path) !== -1) { // 白名单
        next()
      } else {
        next('/login')
      }
    } else {
      store.commit('RECORD_USERINFO', {info: res.result})
      //  跳转到
      if (to.path === '/login') {
        next({path: '/'})
      }
      next()
    }
  })
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
