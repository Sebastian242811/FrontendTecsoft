<template>
  <v-card>
    <v-tabs
        background-color="transparent"
        color="basil"
        grow>
      <v-tab depressed to="/dealer/delivery/1">En espera</v-tab>
      <v-tab depressed to="/dealer/delivery/2">En camino</v-tab>
      <v-tab depressed to="/dealer/delivery/3">En terminal</v-tab>
      <v-tab depressed to="/dealer/delivery/4">Entregado</v-tab>
      <v-tab depressed to="/dealer/delivery/5">Retrasado</v-tab>
    </v-tabs>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-card>
</template>

<script>

export default {
  name: "Delivery",
  components: {
  }
}
</script>

<style scoped>

</style>
