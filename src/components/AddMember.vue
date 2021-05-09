<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="slide-x-reverse-transition"
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
        
        <!-- Form  -->
        <v-form>
          <v-container>
            <v-row justify="center" class="mt-auto">
              <v-col cols="4">
                <v-text-field
                  label="ชื่อ"
                  v-model="userDetail.firstName"
                  required
                >
                </v-text-field>
                <div>
                  {{ userDetail }}
                </div>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="นามสกุล"
                  v-model="userDetail.lastName"
                  required
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-auto">
              <v-col cols="4">
                <v-text-field
                  label="e-mail"
                  v-model="userDetail.firstName"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="password"
                  v-model="userDetail.lastName"
                  required
                >
                </v-text-field>
              </v-col> 
            </v-row>
            <!-- 2nd row -->
            <v-row justify="center">
              <!-- Birthday -->
              <v-col cols="2">
                <v-menu
                  ref="dateMenu"
                  v-model="dateMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                  required
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="วันเกิด"
                      prepend-inner-icon="mdi-calendar"
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      hint="ปปปป-ดด-วว"
                      persistent-hint
                      required
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="date"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="saveDate"
                    required
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <!-- Time of Birth -->
              <v-col cols="2">
                <v-menu
                  ref="menu"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time"
                      label="เวลาเกิด"
                      prepend-inner-icon="mdi-clock-time-four-outline"
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      hint="ชช:นน"
                      persistent-hint
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    full-width
                    format="24hr"
                    @click:minute="$refs.menu.save(time)"
                    @change="saveTime"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="2">
                <v-autocomplete
                  outlined
                  label="จังหวัด"
                  placeholder="จังหวัด"
                  :items="provinceList"
                  v-model="userDetail.birthProvince"
                ></v-autocomplete>
              </v-col>
              <v-col cols="2">
                <v-autocomplete
                  outlined
                  label="เพศ"
                  :items="gendersList"
                  v-model="userDetail.gender"
                >
                </v-autocomplete>
              </v-col>
            </v-row>
            <!-- /2nd row -->

            <v-row>
              <v-card height="50px"> </v-card>
            </v-row>

            <v-row justify="center">
              <v-col cols="8">
                <v-text-field
                  label="ที่อยู่"
                  v-model="userDetail.location"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="2">
                <v-autocomplete
                  outlined
                  label="จังหวัด"
                  ref="rprovince"
                  :items="provinceList"
                  v-model="userDetail.province"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
              <v-col cols="2">
                <v-autocomplete
                  outlined
                  label="เขต/อำเภอ"
                  ref="district"
                  :items="districtList"
                  v-model="userDetail.district"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
              <v-col cols="2">
                <v-autocomplete
                  outlined
                  label="แขวง/ตำบล"
                  ref="sub-district"
                  :items="subDistrictList"
                  v-model="userDetail.subDistrict"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
              <v-col cols="2">
                <v-text-field
                  outlined
                  label="รหัสไปษณีย์"
                  v-model="userDetail.postID"
                  placeholder="รหัสไปรษณีย์"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="start">
              <v-col cols="2"></v-col>
              <v-col cols="2">
                <v-autocomplete
                  outlined
                  label="ระดับสมาชิก"
                  ref="country"
                  :items="tiersList"
                  v-model="userDetail.memberTier"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row justify="end">
              <v-col cols="3">
                <v-btn
                  color="red"
                  class="white--text"
                  @click.prevent="
                    dialog = false;
                    onSubmit();
                  "
                >
                  บันทึก
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <!-- /Form -->
      </v-card>
    </v-dialog>
</template>

<script>
// import thaiAddress from "../database/address.json";

export default {
  data: () => ({
    userDetail: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      timeOfBirth: "",
      birthProvince: "",
      gender: "",
      address: "",
      province: "",
      district: "",
      subDistrict: "",
      postID: "",
      memberTier: "",
    },

    tiersList: ["ธรรมดา", "พรีเมี่ยม", "เจ้าของ", "แอดมิน"],
    gendersList: ["ชาย", "หญิง", "ไม่ระบุ"],
    provinceList: ["1", "2"],
    districtList: ["1", "2"],
    subDistrictList: ["1", "2"],

    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,

    date: null,
    dateMenu: false,
    time: null,
    menu2: false,
  }),

  props: ["attrs", "on"],

  watch: {
    dateMenu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    saveDate(date) {
      this.$refs.dateMenu.save(date);
      this.userDetail.dateOfBirth = date;
    },
    saveTime(time) {
      this.userDetail.timeOfBirth = time;
    },
    onSubmit() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth:  this.dateOfBirth,
        timeOfBirth: this.timeOfBirth,
        birthProvince: this.birthProvince,
        gender: this.gender,
        address: this.address,
        province: this.province,
        district: this.district,
        subDistrict: this.subDistrict,
        postID: this.postID,
        memberTier: this.memberTier        
      }
      console.log(formData);
      this.$store.dispatch('addMember', formData)
    },
  },
};
</script>
