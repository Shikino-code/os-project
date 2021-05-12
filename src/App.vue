<template>
  <v-app >
    <!-- <Drawer :navTitle="currentRouteName"/> -->
    <!-- <Appbar/> -->
    <Navigation :navTitle="currentRouteName" />
    <v-main >
      <v-container fluid style="height: 100vh" >
        <router-view></router-view>
        <v-row >
          <v-col>
            <Footer />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
// import Appbar from "./components/Navigation/Appbar.vue";
// import Drawer from "./components/Navigation/Drawer.vue";

export default {
  name: "App",

  components: {
    Navigation,
    Footer,
    // Appbar,
    // Drawer,
  },

  data: () => ({}),

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
.main {
  // background-image: url("./assets/blueBG.jpg");
  background-size: cover;
  background-color: red;
}
</style>