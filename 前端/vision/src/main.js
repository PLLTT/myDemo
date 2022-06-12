import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

/**将全局的echarts对象挂载到vue的原型对象中*/
Vue.prototype.$echarts = window.echarts
//初始化baseUrl 初始化baseUrl
axios.defaults.baseUrl='http"//127.0.0.1:3000/api/'
//axios挂载到vue原型链上 全局使用 this.$http
Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
