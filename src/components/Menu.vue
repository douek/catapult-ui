<template>
    <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      left
      app>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>fa-server</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Hosts</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
        </v-layout>
      </v-container>
    </v-content>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    }
}
</script>

<style>

</style>
