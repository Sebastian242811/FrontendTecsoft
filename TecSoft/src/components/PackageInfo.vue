<template>
  <div>
    <h1>Package Info</h1>
    <h2>Id:            {{this.id}}</h2>
    <h2>Description:   {{this.description}}</h2>
    <h2>State:         {{this.state}}</h2>
    <h2>Weight:        {{this.weight}}</h2>
    <h2>Priority:      {{this.priority}}</h2>
    <v-btn @click="navigatetoTrackingbypackageid(id)">Tracking</v-btn>
  </div>
</template>

<script>
import PackageService from '@/services/packages-service';
export default {
  name: "PackageInfo",
  data() {
    return {
      id: 0,
      description: "",
      state: "",
      weight: "",
      priority: "",
      discount: 0
    }
  },
  methods:{
    getInfo(id){
      PackageService.getpackagebyId(id).then(response=>{this.id=response.data.id, this.description=response.data.description, this.state=response.data.state,
          this.weight=response.data.weight,this.priority=response.data.priority,this.discount=response.data.discount})
    },
    navigatetoTrackingbypackageid(id,state){
      this.$router.push({name:'Tracking',params:{id:id}});
      this.$router.push({name:'Tracking',params:{state:state}})
    }

  },
  created() {
    this.getInfo(this.$route.params.id);
  },
  mounted() {
    this.getInfo(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
