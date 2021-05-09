import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'
import VueAxios from 'vue-axios'

import axios from 'axios'

Vue.config.productionTip = false

// * Firebase, test backend

axios.defaults.baseURL = 'https://numeiang-default-rtdb.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'wwww'
axios.defaults.headers.get['Accepted'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Requset Interceptor', config)
  return config
})

const resInterceptor = axios.interceptors.response.use(config => {
  console.log('Response Interceptor', config)
  return config
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)


new Vue({
  router,
  store,
  vuetify,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app')
