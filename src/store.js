import Vue from 'vue'
import Vuex from 'vuex'
import hosts from './modules/hosts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hosts
  }
})
