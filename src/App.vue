<template>
  <v-app>
    <app-menu></app-menu>
    <div class="container">
      <router-view class="view"></router-view>
    </div>
  </v-app>
</template>

<script>
import Menu from './components/Menu'

export default {
  components: {
    appMenu: Menu
  },

  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
