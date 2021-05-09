<template>
  <v-menu offset-x bottom :close-on-content-click="closeOnContentClick">
    <template v-slot:activator="{ on, attrs }">
      <v-row class="fill-height">
        <v-sheet
          width="100%"
          height="100%"
          :color="bgclr"
          tile
          v-bind="attrs"
          v-on="on"
          flat
        >
          <v-card-text class="pt-3">
            <p
              v-for="(item, i) in previewItems"
              :key="i"
              style="font-size: 12px"
              class="mb-1"
            >
              <v-icon size="16px">{{ item.icon }}</v-icon> {{ item.text }}
            </p>
          </v-card-text>
        </v-sheet>
      </v-row>
    </template>
    <v-card width="450px">
      <v-card-title
        primary-title
        class="justify-center px-0 pb-0 pt-2"
        style="font-size: 15px"
      >
        1 March
      </v-card-title>
      <v-list dense class="pa-0 pb-2">
        <v-list-item v-for="(item, i) in items" :key="i" class="mx-2">
          <v-list-item-icon class="mr-4">
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <div v-if="item.text === 'วันสำคัญ'">
            <v-chip-group class="pl-0">
              <v-chip
                v-for="(item, i) in importantDays"
                :key="i"
                style="font-size: 13px"
                small
              >
                {{ item }}
              </v-chip>
            </v-chip-group>
          </div>
          <div v-else-if="item.text === 'สีมงคล'">
            <v-icon v-for="(item, i) in goodColors" :key="i" class="">
              mdi-checkbox-marked-circle
            </v-icon>
          </div>
          <div v-else-if="item.text === 'สีกาลกิณี'">
            <v-icon v-for="(item, i) in badColors" :key="i">
              mdi-close-circle
            </v-icon>
          </div>
          <div v-else-if="item.text === 'สิ่งที่ควรทำ'">
            <v-chip-group class="pl-0">
              <v-chip
                v-for="(item, i) in todos"
                :key="i"
                style="font-size: 13px"
                small
              >
                {{ item }}
              </v-chip>
            </v-chip-group>
          </div>
          <div v-else-if="item.text === 'สิ่งที่ไม่ควรทำ'">
            <v-chip-group class="pl-0">
              <v-chip
                v-for="(item, i) in nottodos"
                :key="i"
                style="font-size: 13px"
                small
              >
                {{ item }}
              </v-chip>
            </v-chip-group>
          </div>
          <div v-else>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
      <v-card-actions class="px-4 pb-3">
        <v-spacer></v-spacer>
        <edit-day-detail />
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import EditDayDetail from "./EditDayDetail";

export default {
  data: () => ({
    dialog: false,
    closeOnContentClick: false,
    items: [
      { text: "แรม 15 ค่ำ เดือน 10", icon: "mdi-moon-waxing-crescent" },
      { text: "ปีชวด", icon: "mdi-cow" },
      { text: "วันพระไทย", icon: "mdi-buddhism" },
      // { text: "วันพระจีน", icon: "mdi-buddhism" },
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
    previewItems: [
      { text: "แรม 15 ค่ำ เดือน 10", icon: "mdi-moon-waxing-crescent" },
      { text: "ปีฉลู", icon: "mdi-cow" },
      // { text: "วันพระไทย", icon: "mdi-buddhism" },
      // { text: "วันพระจีน", icon: "mdi-buddhism" },
      // { text: "วันธงชัย", icon: "mdi-star-circle" },
      // { text: "วันสำคัญ", icon: "mdi-star-box" },
    ],
    importantDays: ["วันมาฆบูชา", "วันวิสาขบูชา"],
    goodColors: ["", "", ""],
    badColors: ["", ""],
    todos: ["เริ่มธุรกิจ (25%)", "แต่งงาน (50%)"],
    nottodos: ["เดินทาง (75%)", "ย้ายบ้าน (25%)"],
  }),

  methods: {
    openDayDetail() {},
  },

  props: ["bgclr"],

  components: {
    "edit-day-detail": EditDayDetail,
  },
};
</script>