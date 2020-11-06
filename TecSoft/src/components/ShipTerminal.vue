<template>
  <v-card>
    <h1>{{ company.name }}</h1>
    <div v-for="shipTerminal in shipTerminals" :key="shipTerminal.id">
      <v-card class="mx-auto mb-15"
              max-width="700"
              outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              <div>
                <v-card
                    class="d-flex justify-space-around"
                >
                  <v-card>{{ shipTerminal.terminalOrigin.name }}</v-card>
                  <v-card>{{ shipTerminal.terminalDestiny.name }}</v-card>
                </v-card>
              </div>
            </v-list-item-title>
            <v-divider class="mb-6"></v-divider>
            <v-list-item-title class="headline mb-5">
              <div>
                <v-card
                    class="d-flex justify-space-around"
                >
                  <v-card class="text-sm-h6 white--text pa-2" color="error">{{ shipTerminal.terminalOrigin.city.name }}</v-card>
                  <v-card class="text-sm-h6 white--text pa-2" color="primary">{{ shipTerminal.terminalDestiny.city.name }}</v-card>
                </v-card>
              </div>
            </v-list-item-title>
            <v-list-item-title class="headline mb-5">
              <div>
                <v-card
                    class="d-flex justify-space-around"
                >
                  <v-card>{{ shipTerminal.terminalOrigin.adress }}</v-card>
                  <v-card>{{ shipTerminal.terminalDestiny.adress }}</v-card>
                </v-card>
              </div>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">
              <div class="d-flex justify-space-around mb-6">
                <v-card class="text-sm-h6 white--text pa-2" color="deep-purple lighten-2">S/{{ shipTerminal.price }}</v-card>
              </div>
                <v-btn
                  color="light-green accent-2">
                  Solicitar
                </v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </v-card>
</template>

<script>

import ShipTerminalService from '@/services/shipTerminals-service'
import CompanyService from '@/services/companies-service'

export default {
  name: "ShipTerminal",
  data(){
    return{
      search: '',
      shipTerminals: [],
      company: []
    }
  },
  methods:{
    retrieveShipTerminal(id){
      ShipTerminalService.getAllShipTerminalByCompanyId(id)
      .then(response => {
        this.shipTerminals = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    },
    retrieveCompany(id){
      CompanyService.get(id)
      .then(response => {
        this.company = response.data;
      })
    }

  },
  created() {
    this.retrieveShipTerminal(this.$route.params.id);
    this.retrieveCompany(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
