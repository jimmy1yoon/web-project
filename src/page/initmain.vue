<template>
    <v-app id="inspire">
      <v-app-bar
        app
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Application</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
  
      <v-main>
        <v-container>
          <card-sections />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>

  import cardSections from "@/components/cardSection"

  export default {
    components: { 
      cardSections 
    },
    data() {
      return {

      }
    }
  }

  </script>