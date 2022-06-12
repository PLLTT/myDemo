import Vue from 'vue'
import VueRouter from 'vue-router'
import sellerPage from '../views/SellerPage.vue'

Vue.use(VueRouter)

const routes = [

  {
    path:'/',
    name:'sellerPage',
    component:sellerPage
  }
 
]

const router = new VueRouter({
  routes
})

export default router
