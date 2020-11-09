<template>
  <v-card
      class="mx-auto my-12"
      max-width="700px">
    <v-card-title>Package id</v-card-title>
    <v-card-text>
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step
            step="1"
        >
          Ad type
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            step="2"
        >
          Ad style
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          Get code
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    </v-card-text>
    <v-card-title>Hola</v-card-title>
  </v-card>
</template>

<script>
export default {
name: "PackageState"
}
</script>

<style scoped>

</style>
