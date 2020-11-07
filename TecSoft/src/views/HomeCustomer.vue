<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>In-App Navigation Sample</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed @click="navigateToHome">Home</v-btn>
        <v-btn depressed @click="navigateToFindCompany">FindCompany</v-btn>
        <v-btn depressed @click="navigateToAbout">Aboute</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "HomeCustomer",
  methods:{
    navigateToHome(){
      this.$router.push({ name: 'HomeCustomerPrincipal'});
    },
    navigateToFindCompany(){
      this.$router.push({ name: 'FindCompany'});
    },
    navigateToAbout(){
      this.$router.push({ name: 'CustomerAbout'});
    }
  }

}
</script>

<style scoped>

</style>
