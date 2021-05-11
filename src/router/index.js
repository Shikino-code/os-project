import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'



Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/calendar',
    name: 'ปฏิทิน',
    component: () => import('../views/Calendar.vue')
  },
  
  {
    path: '/members',
    name: 'สมาชิก',
    component: () => import('../views/Members.vue')
  },
  {
    path: '/content',
    name: 'บทความ',
    component: () => import('../views/Content.vue')
  },
  {
    path: '/signin',
    name: 'เข้าสู่ระบบ',
    component: () => import('../views/Signin.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/signup',
    name: 'ลงทะเบียน',
    component: () => import('../views/signup.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
