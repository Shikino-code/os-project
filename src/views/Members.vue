<template>
  <v-app>
    <v-container>
      <!-- Filter -->
      <v-row>
        <v-card class="d-flex " height="80" flat tile >
          <v-col cols="auto">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search ID , E-mail"
              clearable
            ></v-text-field>
          </v-col>
        </v-card>

        <v-spacer></v-spacer>

        <v-card class="d-flex" height="80" flat tile>
          <v-col cols="auto" align-self="center"> ระดับสมาชิก </v-col>
          <!-- <v-col cols="auto" align-self="center"> {{ filters }} </v-col> -->
          <v-col cols="auto" align-self="center">
            <v-checkbox
              v-model="filters.memberTier"
              label="ธรรมดา"
              value="ธรรมดา"
            ></v-checkbox>
          </v-col>
          <v-col cols="auto" align-self="center">
            <v-checkbox
              v-model="filters.memberTier"
              label="พรีเมี่ยม"
              value="พรีเมี่ยม"
            ></v-checkbox>
          </v-col>
          <v-col cols="auto" align-self="center">
            <v-checkbox
              v-model="filters.memberTier"
              label="เจ้าของ"
              value="เจ้าของ"
            ></v-checkbox>
          </v-col>
          <v-col cols="auto" align-self="center">
            <v-checkbox
              v-model="filters.memberTier"
              label="แอดมิน"
              value="แอดมิน"
            ></v-checkbox>
          </v-col>
          <v-col cols="auto" align-self="center">
            <v-btn elevation="0" text @click="resetFilter">ล้างฟิลเตอร์</v-btn>
          </v-col>
        </v-card>
      </v-row>
      <!-- /Filter -->

      <!-- Table -->
      <v-row>
        <v-col>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="filteredMembers"
            item-key="memberId"
            :items-per-page="5"
            :search="search"
            show-select
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize"> Reset </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <!-- /Table -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Members",

  data: () => ({
    search: "",
    selected: [],
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "รหัสสมาชิก",
        align: "start",
        sortable: true,
        value: "memberId",
        filterable: true,
      },
      { text: "ชื่อ", value: "firstName", filterable: false },
      { text: "นามสกุล", value: "lastName", filterable: false },
      { text: "เพศ", value: "gender", filterable: false },
      { text: "เบอร์โทร", value: "phoneNumber", filterable: false },
      { text: "อีเมล", value: "email", filterable: true },
      { text: "ระดับสมาชิก", value: "memberTier", filterable: true },
      { text: "การจัดการ", value: "actions", sortable: false },
    ],
    members: [],
    filters: {
      memberTier: [],
    },
    editedIndex: -1,
    editedItem: {
      memberId: 0,
      firstName: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
      email: "",
      memberTier: "",
    },
    defaultItem: {
      memberId: 0,
      firstName: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
      email: "",
      memberTier: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    filteredMembers() {
      return this.members.filter((d) => {
        return Object.keys(this.filters).every((f) => {
          return this.filters[f].length < 1 || this.filters[f].includes(d[f]);
        });
      });
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.members = [
        {
          memberId: "0001",
          firstName: "นม",
          lastName: "เปรี้ยว",
          gender: "ชาย",
          phoneNumber: "0899999999",
          email: "dutchmilk@email.com",
          memberTier: "ธรรมดา",
        },
        {
          memberId: "0002",
          firstName: "Frozen",
          lastName: "Yogurt",
          gender: "หญิง",
          phoneNumber: "0899999999",
          email: "dutchmilk@email.com",
          memberTier: "พรีเมี่ยม",
        },
        {
          memberId: "0003",
          fname: "จอห์น",
          lastName: "ดอว์",
          gender: "ชาย",
          phoneNumber: "0899999999",
          email: "john@lnwza.com",
          memberTier: "เจ้าของ",
        },
        {
          memberId: "0004",
          firstName: "Frozen",
          lastName: "Yogurt",
          gender: "หญิง",
          phoneNumber: "0899999999",
          email: "dutchmilk@email.com",
          memberTier: "แอดมิน",
        },
        {
          memberId: "0005",
          firstName: "wefgwer",
          lastName: "wegweg",
          gender: "หญิง",
          phoneNumber: "0899999999",
          email: "dutchmilk@email.com",
          memberTier: "ธรรมดา",
        },
      ];
    },
    
    resetFilter() {
      this.filters = {
        memberTier: [],
      };
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
