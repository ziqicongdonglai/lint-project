import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/index'
import './style/index.scss'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
