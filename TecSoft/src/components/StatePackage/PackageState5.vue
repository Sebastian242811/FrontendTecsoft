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
              {{ pack.id }}
            </div>
            <v-list-item-title class="headline mb-1">
              {{ pack.description }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ pack.observations }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn
              outlined
              rounded
              text
              @click="updateState(pack.id,1)"
          >
            Colocar en Espera
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import PackageService from '@/services/packages-service'

export default {
  name: "ShowDeliveryState",
  data(){
    return {
      packages: []
    }
  },
  props: [
    'update'
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
    },
    refresh(id){
      this.retrievePackageState(id);
    },
    updateState(id,value){
      PackageService.updatePackageState(id,value)
          .then(() => {
            this.refresh(5);
          })
          .catch(e => {
            console.log(e);
          })
    }
  },
  mounted() {
    this.retrievePackageState(5);
  }
}
</script>

<style scoped>

</style>
