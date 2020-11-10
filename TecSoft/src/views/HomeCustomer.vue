<template>
  <div>
    <h1>Packages in Progress</h1>
    <v-simple-table>
      <thead>
      <tr>
        <th class="text-left">
          Id
        </th>
        <th class="text-left">
          Description
        </th>
        <th class="text-left">
          Priority
        </th>
        <th class="text-left">
          State
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in packages"
          :key="item.id" @click="navigateToPackageInfoBycompanyId(item.id)">
        <td>{{ item.id }}</td>
        <td> {{item.description}}</td>
        <td> {{item.priority}}</td>
        <td>{{ item.state }}</td>
      </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import PackageService from '@/services/packages-service'
export default {
  name: "HomeCustomerPrincipal",
  data() {
    return{
      packages:[]
    }
  },
  methods:{
    retriveshippingcompanies(){
      PackageService.getAllStateCustomerPackage(1).then(response=>{this.packages=response.data}).catch(e => {
        console.log(e);
      })
    },
    navigateToPackageInfoBycompanyId(id){
      this.$router.push({name:'PackageInfo',params:{id:id}});
    }
  },
  mounted(){
    this.retriveshippingcompanies();
  }
}
</script>

<style scoped>

</style>
