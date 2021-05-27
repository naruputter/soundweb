<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
    > <router-link to="/home">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-1">menu</span>
      </v-btn>
      </router-link>
      <v-btn
      text>
        <span class="mr-1">next</span>
      </v-btn>
    

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <br><br>
  <router-view></router-view>
  </v-app>
  
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
