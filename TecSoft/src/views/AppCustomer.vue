<template>
  <v-app>
    <v-app-bar app class="blue lighten-2">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed class="blue lighten-5">
          <router-link to="/customer/home">Home</router-link>
        </v-btn>
        <v-btn depressed class="blue lighten-5">
          <router-link to="/customer/findCompany">FindCompany</router-link>
        </v-btn>
        <v-btn depressed class="blue lighten-5">
          <router-link to="/customer/packages">My package</router-link>
        </v-btn>
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
  name: "AppCustomer",
  methods:{
  }

}
</script>

<style scoped>

</style>
