import {
  getHosts
} from '../api/hosts'

const state = {
  hosts: []
}

const mutations = {
  'SET_HOSTS' (state, hosts) {
    state.hosts = hosts
  }
}

const actions = {
  FETCH_HOSTS ({ commit }) {
    getHosts().then(response => {
      commit('SET_HOSTS', response.data)
    }).catch(err => {
      console.log(err)
    })
  }
}

const getters = {
  hosts: state => state.hosts
}

export default {
  state,
  mutations,
  actions,
  getters
}
