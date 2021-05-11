<template>
  <nav>
    <v-app-bar app color="white" outlined elevation="1">
      
      <v-btn>sss</v-btn>
      <v-btn>sss</v-btn>
      <v-spacer></v-spacer>
      <v-btn>sss</v-btn>
      <v-btn>sss</v-btn>


    </v-app-bar>
    
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
  },
};
</script>

