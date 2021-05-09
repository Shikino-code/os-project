import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'



Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  {
    path: '/',
    redirect: 'calendar'
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
    path: '/content/addcontent',
    name: 'เพิ่มบทความ',
    component: () => import('../views/AddContent.vue')
  },
  {
    path: '/fortune-telling',
    name: 'ดูดวง',
    component: () => import('../views/FortuneTelling.vue')
  },
  {
    path: '/auspicious',
    name: 'ดูฤกษ์',
    component: () => import('../views/Auspicious.vue')
  },
  {
    path: '/test',
    name: 'ทดสอบ',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/signin',
    name: 'เข้าสู่ระบบ',
    component: () => import('../views/Signin.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/signup',
    name: 'ลงทะเบียน(test)',
    component: () => import('../views/signup.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
