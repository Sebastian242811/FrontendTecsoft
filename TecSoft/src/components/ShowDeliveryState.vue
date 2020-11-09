<template>
  <v-card>
    <div v-for="pack in packages" :key="pack.id">
    <v-card
        class="mx-auto mb-15"
        max-width="600"
        outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            {{ valueState }}
          </div>
          <v-list-item-title class="headline mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
            outlined
            rounded
            text
        >
          Button
        </v-btn>
      </v-card-actions>
    </v-card>
    </div>
  </v-card>
</template>

<script>
import PackageService from '@/services/Delivery/packages-service'

export default {
  name: "ShowDeliveryState",
  data(){
    return {
      packages: []
    }
  },
  props: [
      'valueState'
  ],
  methods: {
    retrievePackageState(id){
      PackageService.getAllByState(id)
      .then(response => {
        this.packages = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {
    this.retrievePackageState(this.valueState);
  }
}
</script>

<style scoped>

</style>
