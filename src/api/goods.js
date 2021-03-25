import http from './public'
// 商品列表
export const getAllGoods = (params) => {
  return http.fetchGet('/api/goods/allGoods', params)
}
// 获取购物车列表
export const getCartList = (params) => {
  return http.fetchPost('/api/cart/cartList', params)
}
// 加入购物车
export const addCart = (params) => {
  return http.fetchPost('/api/cart/addCart', params)
}
// 删除购物车
export const delCart = (params) => {
  return http.fetchPost('/member/delCart', params)
}
// 删除购物车勾选商品
export const delCartChecked = (params) => {
  return http.fetchPost('/api/cart/delCartChecked', params)
}
// 编辑购物车
export const cartEdit = (params) => {
  return http.fetchPost('/api/cart/cartEdit', params)
}
// 全选
export const editCheckAll = (params) => {
  return http.fetchPost('/api/cart/editCheckAll', params)
}
// 删除整条购物车
export const cartDel = (params) => {
  return http.fetchPost('/api/cart/cartDel', params)
}
// 获取用户地址
export const addressList = (params) => {
  return http.fetchPost('/api/address/addressList', params)
}
// 修改收货地址
export const addressUpdate = (params) => {
  return http.fetchPost('/api/address/updateAddress', params)
}
// 添加收货地址
export const addressAdd = (params) => {
  return http.fetchPost('/api/address/addAddress', params)
}
// 删除收货地址
export const addressDel = (params) => {
  return http.fetchPost('/api/address/delAddress', params)
}
// 生成订单
export const submitOrder = (params) => {
  return http.fetchPost('/api/order/addOrder', params)
}
// 支付
export const payOrder = (params) => {
  return http.fetchPost('/api/order/payOrder', params)
}
// 获取用户订单
export const orderList = (params) => {
  return http.fetchGet('/api/order/orderList', params)
}
// 获取单个订单详情
export const getOrderDet = (params) => {
  return http.fetchGet('/api/order/orderDetail', params)
}
// 取消订单
export const cancelOrder = (params) => {
  return http.fetchPost('/api/order/cancelOrder', params)
}
// 商品详情
export const productDet = (params) => {
  return http.fetchGet('/api/goods/productDet', params)
}
// 删除订单
export const delOrder = (params) => {
  return http.fetchGet('/api/order/delOrder', params)
}
// 商品列表
export const getSearch = (params) => {
  return http.fetchGet('/goods/search', params)
}
// 快速搜索
export const getQuickSearch = (params) => {
  return http.fetchGet('/goods/quickSearch', params)
}
