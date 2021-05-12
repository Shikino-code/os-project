import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'



Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  {
    path: '/',
    redirect: 'Homepage'
  },
  {
    path: '/calendar',
    name: 'ปฏิทิน',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue')
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
    path: '/Signup',
    name: 'ลงทะเบียน',
    component: () => import('../views/Signup.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/1',
    name: '1',
    component: () => import('../views/1.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/2',
    name: '2',
    component: () => import('../views/2.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/3',
    name: '3',
    component: () => import('../views/3.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
