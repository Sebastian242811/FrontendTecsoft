<template>
  <h1>Hola {{ dispatcher.name }}</h1>
</template>

<script>
import DispatcherService from '@/services/dispatchers-service'

export default {
  name: "HomeDispatcher",
  data(){
    return{
      dispatcher: ''
    }
  },
  methods: {
    getId(id){
      DispatcherService.get(id)
      .then(response => {
        this.dispatcher = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {
    this.getId(1);
  }
}
</script>

<style scoped>

</style>
