<template>
  <nav>
    <v-app-bar app color="white" outlined elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ navTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Members -->
      <div v-if="navTitle === 'สมาชิก'" >
        <v-row :justify="5">
          <edit-member />
          <add-member />
        </v-row>
      </div>

      <!-- Calendar -->
      <div v-else-if="navTitle == 'ปฏิทิน'">
        <v-btn elevation="2">นำเข้าไฟล์ .csv</v-btn>
      </div>

      <!-- AddContent -->
      <div v-else-if="navTitle === 'บทความ'">
      <v-btn to="/content/addContent"> เพิ่มคอนเทนต์</v-btn>

        <!-- <v-btn elevation="2" >เพิ่มคอนเทนต์</v-btn> -->
      </div>

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

          <v-list-item >
            <v-list-item-title @click="onLogout">Logout</v-list-item-title>
          </v-list-item>

        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import AddMember from "./AddMember";
import EditMember from "./EditMember";
import AddContent from "./AddContent";

export default {
  name: "Navigation",

  data: () => ({
    drawer: true,
    items: [
      { title: "ปฏิทิน", icon: "mdi-calendar", path: "/calendar" },
      { title: "สมาชิก", icon: "mdi-account-edit", path: "/members" },
      { title: "บทความ", icon: "mdi-newspaper", path: "/content" },
      { title: "ดูดวง", icon: "mdi-star-four-points", path: "/fortune-telling" },
      {
        title: "ดูฤกษ์",
        icon: "mdi-star-three-points",
        path: "/auspicious",
      },
      { title: "ทดสอบ", icon: "mdi-test-tube", path: "/test" },
      { title: "เข้าสู่ระบบ", icon: "mdi-test-tube", path: "/signin" },
      
      // ! Test Purpose, Delete later
      { title: "ลงทะเบียน(test)", icon: "mdi-test-tube", path: "/signup" },
    ],
    select: 1,
  }),

  props: ["navTitle"],

  methods: {
    onLogout (){
      this.$store.dispatch('logout')
    }
  },

  components: {
    "add-member": AddMember,
    "edit-member": EditMember,
    "add-content": AddContent
  },
};
</script>

