<template>
  <div>
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step
            step="1" v-if="this.cont>=1" complete>
          Waiting
        </v-stepper-step>

        <v-stepper-step
            step="1" v-else>
          Waiting
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            step="2" v-if="this.cont>=2" complete>
          In route
        </v-stepper-step>

        <v-stepper-step
            step="2" v-else>
          In route
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step

            step="3" v-if="this.cont>=3" complete>
          In destiny terminal
        </v-stepper-step>

        <v-stepper-step

            step="3" v-else>
          In destiny terminal
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4" v-if="this.cont>=4" complete>
          Shipped
        </v-stepper-step>

        <v-stepper-step step="4" v-else>
          Shipped
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <v-card v-for="change in changes" :key="change.initialState">
      <v-card-title>State change info</v-card-title>
      <v-card-text>Initial State: {{change.initialState}}</v-card-text>
      <v-card-text>Final State: {{change.finalState}}</v-card-text>
      <v-card-text>Edit Date: {{change.editDate}}</v-card-text>
    </v-card>

  </div>
</template>

<script>
import ChangeState from '@/services/ChangeState-service'
export default {
  name: "Tracking",
  data(){
    return{
      changes:[],
      states:["Waiting","In_route","In_destination_terminal","Shipped"],
      cont:0
    }
  },
  methods:{
    getinfochanges(id){
      ChangeState.getchangebypackage(id).then(response=>{this.changes=response.data})
    },
    backtoinfo(id){
      this.router.push({name:'PackageInfo',params:{id:id}})
    },
    getcontvalue(state){
      if(state=="Waiting"){
        this.cont=1;
      }
      if(state=="In_route"){
        this.cont=2;
      }
      if(state=="In_destination_terminal"){
        this.cont=3;
      }
      if(state=="Shipped"){
        this.cont=4;
      }
    }
  },
  created(){
    this.getinfochanges(this.$route.params.id);
    this.getcontvalue(this.$route.params.state);
  },
  mounted(){
    this.getinfochanges(this.$route.params.id);
    this.getcontvalue(this.$route.params.state);
  }
}
</script>

<style scoped>

</style>
