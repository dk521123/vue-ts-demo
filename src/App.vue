<template>
  <v-app>
    <Header />
    <Drawer />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Drawer from './components/Drawer.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    Drawer,
    Footer,
  },

  data: () => ({
  }),
});
</script>
