import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Hosts from './views/hosts/Hosts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/hosts',
      name: 'hosts',
      component: Hosts
    }
  ]
})
