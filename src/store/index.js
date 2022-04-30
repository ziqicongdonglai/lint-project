import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: {}
  },
  getters: {},
  mutations: {
    // 登录成功后，将用户数据存入
    login(state, user) {
      state.user = user
      localStorage.setItem('loginUser', JSON.stringify(user))
    },
    // 退出登录
    logout(state) {
      state.user = {}
      localStorage.removeItem('loginUser')
    }
  },
  actions: {},
  modules: {}
})
