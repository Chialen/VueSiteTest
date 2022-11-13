<template>
    
      <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            @click="goRoute(homelink)"
            src="@/assets/surflogo.png"
            transition="scale-transition"
            width="40"
          />
  
          <v-toolbar-title>衝浪世界</v-toolbar-title>
        </div>
        <v-spacer></v-spacer>
  
        <v-btn text @click="goRoute(aboutlink)">
          <span class="mr-2">關於我們</span>
          <v-icon>mdi-owl</v-icon>
        </v-btn>
      </v-app-bar>
  
      
  </template>
  
  <script>
  
  export default {
    name: 'App',
    data: () => ({
      homelink: '/',
      aboutlink: '/about',
      //
    }),
  
  methods: {
    goRoute(routepath) {
      return this.$router.push(routepath);
    },
  },
  };
  </script>