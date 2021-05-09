<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red" dark v-bind="attrs" v-on="on"> แก้ไข </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="red">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>1 มี.ค.</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false"> บันทึก </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <div v-if="item.text === 'วัน'"></div>
            <div v-else>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    items: [
      { text: "วัน", icon: "mdi-moon-waxing-crescent" },
      { text: "ปีชวด", icon: "mdi-cow" },
      { text: "วันพระไทย", icon: "mdi-buddhism" },
      { text: "วันพระจีน", icon: "mdi-buddhism" },
      { text: "วันธงชัย", icon: "mdi-star-circle" },
      { text: "วันสำคัญ", icon: "mdi-star-box" },
      { text: "สีมงคล", icon: "mdi-circle" },
      { text: "สีกาลกิณี", icon: "mdi-circle" },
      { text: "05:00 น.", icon: "mdi-clock" },
      { text: "ตะวันออกเฉียงเหนือ (NE)", icon: "mdi-compass" },
      { text: "สิ่งที่ควรทำ", icon: "mdi-check-bold" },
      { text: "สิ่งที่ไม่ควรทำ", icon: "mdi-close-thick" },
      { text: "ลอตเตอรี่.jpg", icon: "mdi-ballot" },
    ],
  }),
};
</script>