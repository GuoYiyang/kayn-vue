import http from './public'
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/api/login?username=' + params.username + "&password=" + params.password, params)
}
// 退出登陆
export const loginOut = (params) => {
  return http.fetchGet('/api/loginOut', params)
}
// 用户信息
export const userInfo = (params) => {
  return http.fetchGet('/api/checkLogin', params)
}
// 用户信息修改
export const userEdit = (params) => {
  return http.fetchPost('/api/user/edit', params)
}
// 注册账号
export const register = (params) => {
  return http.fetchPost('/api/register', params)
}
// 首页接口
export const productHome = (params) => {
  return http.fetchGet('/api/goods/home', params)
}
// 推荐板块
export const recommend = (params) => {
  return http.fetchGet('/api/goods/recommend', params)
}


