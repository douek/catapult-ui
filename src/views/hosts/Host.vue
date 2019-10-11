<template>
  <div>
    name: {{ hostName }}
  </div>
</template>
<script>
export default {
  props: ['host'],
  data () {
    return {
      hostName: this.host.name
    }
  }
}
</script>
