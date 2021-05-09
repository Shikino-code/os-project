<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on"> เพิ่มสมาชิก </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="red">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>เพิ่มสมาชิก</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> บันทึก </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="ชื่อ" v-model="user.fName"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="นามสกุล"
                  v-model="user.lName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-menu
                  v-model="birthdate.menuDate"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="user.date"
                      label="วันเดือนปีเกิด"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="user.date"
                    @input="birthdate.menuDate = false"
                    locale="th-th"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-menu
                  ref="menu"
                  v-model="birthdate.menuTime"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="user.time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="user.time"
                      label="เวลาเกิด"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="birthdate.menuTime"
                    v-model="user.time"
                    full-width
                    @click:minute="$refs.menu.save(user.time)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-autocomplete
                  :items="address"
                  :filter="provinceFilter"
                  item-text="province"
                  label="จังหวัด"
                  v-model="user.birthProvince"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-autocomplete
                  :items="genders"
                  :filter="customFilter"
                  item-text="name"
                  label="เพศ"
                  v-model="user.gender"
                >
                </v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="ที่อยู่"
                  v-model="user.address"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-autocomplete
                  :items="address"
                  :filter="provinceFilter"
                  item-text="province"
                  label="จังหวัด"
                  v-model="user.province"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-autocomplete
                  :items="address"
                  :filter="districtFilter"
                  item-text="district"
                  label="เขต/อำเภอ"
                  v-model="user.district"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-autocomplete
                  :items="address"
                  :filter="subdistrictFilter"
                  item-text="subdistrict"
                  label="แขวง/ตำบล"
                  v-model="user.subdistrict"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-autocomplete
                  :items="address"
                  :filter="zipcodeFilter"
                  item-text="zipcode"
                  label="รหัสไปรษณีย์"
                  v-model="user.zipcode"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" sm="3" md="3">
                <v-autocomplete
                  :items="userTypes"
                  :filter="customFilter"
                  item-text="name"
                  label="ประเภทผู้ใช้"
                  v-model="user.userType"
                >
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <div>{{ user }}</div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import thaiAddress from "../database/address.json";

export default {
  data: () => ({
    dialog: false,
    user: {
      fName: "",
      lName: "",
      date: new Date().toISOString().substr(0, 10),
      time: null,
      birthProvince: "",
      gender: "",
      address: "",
      province: "",
      district: "",
      subdistrict: "",
      zipcode: null,
      userType: "",
    },
    birthdate: {
      menuDate: false,
      menuTime: false,
    },
    userTypes: [{ name: "ธรรมดา" }, { name: "พรีเมี่ยม" }],
    genders: [{ name: "ชาย" }, { name: "หญิง" }],
    address: thaiAddress,
  }),

  methods: {
    provinceFilter(item, queryText) {
      return item.province.indexOf(queryText) > -1;
    },
    districtFilter(item, queryText) {
      return item.district.indexOf(queryText) > -1;
    },
    subdistrictFilter(item, queryText) {
      return item.subdistrict.indexOf(queryText) > -1;
    },
    zipcodeFilter(item, queryText) {
      return item.zipcode.indexOf(queryText) > -1;
    },
    customFilter(item, queryText) {
      return item.name.indexOf(queryText) > -1;
    },
  },
};
</script>
