<template>
  <v-card>
    <div>
      <h1 class="text-center">Companies</h1>
    </div>
    <div v-for="company in companies" :key="company.id">
      <v-card class="mx-auto mb-10"
              max-width="700"
              outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-1">
              {{ company.name }}
            </div>
            <v-list-item-title class="headline mb-1">
              -----------------
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ company.description }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar
              tile
              size="80"
              color="grey"
          ></v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn color="primary" @click="navigateToShipTerminalByCompanyId(company.id)">Solicitar</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>

</template>

<script>
import CompanyService from '@/services/companies-service'

export default {
  name: "FindCompanies",
  data(){
    return {
      search: '',
      companies: []
    }
  },
  methods: {
    retrieveCompanies(){
      CompanyService.getAll()
      .then(response => {
        this.companies = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    },
    navigateToShipTerminalByCompanyId(id){
      this.$router.push({name: 'ShipTerminal',params:{id:id}});
    }

  },
  mounted() {
    this.retrieveCompanies();
  }

}
</script>

<style scoped>

</style>
