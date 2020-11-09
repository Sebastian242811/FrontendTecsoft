<template>
  <v-card>
    <v-tabs
      fixed-tabs
      background-color="black"
      dark
    >
      <v-tab>En espera</v-tab>
      <v-tab>En camino</v-tab>
      <v-tab>Retraso</v-tab>
      <v-tab>En terminal</v-tab>
      <v-tab-item>
        <ShowDeliveryState value-state="1"/>
      </v-tab-item>
      <v-tab-item>
        <ShowDeliveryState value-state="2"/>
      </v-tab-item>
      <v-tab-item>
        <ShowDeliveryState value-state="3"/>
      </v-tab-item>
      <v-tab-item>
          <ShowDeliveryState value-state="4"/>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import ShowDeliveryState from "@/components/ShowDeliveryState";

export default {
  name: "Delivery",
  components: {
    ShowDeliveryState
  },
}
</script>

<style scoped>

</style>
