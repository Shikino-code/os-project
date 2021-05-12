<template>
  <nav>
    <v-app-bar app color="white" outlined elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn to="/main"><v-icon medium>mdi-home</v-icon></v-btn>
      <v-btn>sss</v-btn>
      <v-spacer></v-spacer>
      <v-btn>sss</v-btn>
      <v-btn href="https://vuetifyjs.com/en/api/v-btn/#props">sss</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <!-- NumEiang Icon & Title -->
      <v-list-item class="py-2">
        <v-avatar size="50" color="red">
          <!-- <img src="src" alt="alt"> -->
        </v-avatar>
        <v-list-item-content class="px-5">
          <v-list-item-title class="app-name"> น่ำเอี๊ยง </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item-group mandatory color="red darken-4">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            router
            :to="item.path"
          >
            <!-- icon & name-->
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="onLogout">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
// import AddContent from "./AddContent";

export default {
  name: "Navigation",

  data: () => ({
    drawer: true,
    items: [
      { title: "ปฏิทิน", icon: "mdi-calendar", path: "/calendar" },
      { title: "สมาชิก", icon: "mdi-account-edit", path: "/members" },
      { title: "บทความ", icon: "mdi-newspaper", path: "/content" },
      { title: "Homepage", icon: "mdi-star-four-points", path: "/Homepage" },
      { title: "1", icon: "mdi-star-four-points", path: "/1" },
      {
        title: "2",
        icon: "mdi-star-three-points",
        path: "/2",
      },
      { title: "3", icon: "mdi-test-tube", path: "/3" },
      { title: "เข้าสู่ระบบ", icon: "mdi-test-tube", path: "/signin" },
      { title: "ลงทะเบียน", icon: "mdi-test-tube", path: "/signup" },
    ],
    select: 1,
  }),

  props: ["navTitle"],

  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    },
  },
  components: {},
};
</script>

