<template>
    <div>
        <appHost v-for="host in hosts" :host="host" :key="host.id">
        </appHost>
    </div>
</template>
<script>
import Host from './Host'

export default {
  data () {
    return {
    }
  },

  components: {
    appHost: Host
  },

  methods: {
  },

  computed: {
    hosts () {
      return this.$store.getters.hosts
    }
  },

  created () {
    this.$store.dispatch('FETCH_HOSTS')
  }
}
</script>
