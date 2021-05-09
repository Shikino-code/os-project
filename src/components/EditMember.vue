<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="slide-x-reverse-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red" class="white--text" dark v-bind="attrs" v-on="on">
        แก้ไขสมาชิก
      </v-btn>
    </template>
    
    <v-card>
      <div>
        <v-toolbar dark color="red">
          <v-toolbar-title>แก้ไขสมาชิก</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </div>
      <!-- Form  -->
      <v-container>
        <v-row justify="center" class="mt-auto">
          <v-col cols="2">
            <v-text-field
              label="รหัสสมาชิก"
              readonly
              v-model="form.memberId"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="ชื่อจริง"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="นามสกุล"></v-text-field>
          </v-col>
        </v-row>
        <!-- 2nd row -->
        <v-row justify="center">
          <!-- Buithday -->
          <v-col cols="2">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
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
                ></v-text-field>
              </template>
              <v-date-picker
                ref="picker"
                v-model="date"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
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
              ></v-time-picker>
            </v-menu>
          </v-col>
          <v-col cols="2">
            <v-autocomplete outlined label="จังหวัด"></v-autocomplete>
          </v-col>
          <v-col cols="2">
            <v-autocomplete outlined label="เพศ"></v-autocomplete>
          </v-col>
        </v-row>
        <!-- /2nd row -->

        <v-row>
          <v-card height="50px"> </v-card>
        </v-row>

        <v-row justify="center">
          <v-col cols="8">
            <v-text-field label="ที่อยู่"></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2">
            <v-autocomplete outlined label="จังหวัด"></v-autocomplete>
          </v-col>
          <v-col cols="2">
            <v-autocomplete outlined label="เขต/อำเภอ"></v-autocomplete>
          </v-col>
          <v-col cols="2">
            <v-autocomplete outlined label="แขวง/ตำบล"></v-autocomplete>
          </v-col>
          <v-col cols="2">
            <v-autocomplete outlined label="รหัสไปษณีย์"></v-autocomplete>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="2"></v-col>
          <v-col cols="2">
            <v-autocomplete outlined label="ระดับสมาชิก"></v-autocomplete>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="2"></v-col>
          <v-col cols="3">
            <v-btn
              color="grey darken-3"
              class="white--text"
              @click="dialog = false"
            >
              ปิดการใช้งาน
            </v-btn>
          </v-col>
          <v-col cols="4"></v-col>
          <v-col cols="auto">
            <v-btn color="red" class="white--text" @click="dialog = false">
              บันทึก
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-data-table
              :headers="headers"
              :items="transactions"
              item-key="transactionId"
              class="elevation-2"
              pagination.sync="pagination"
              loading="true"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title> ประวัติธุรกรรม </v-toolbar-title>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditMember",

  data: () => ({
    dialog: false,
    date: null,
    menu1: false,
    time: null,
    menu2: false,
    form: { memberId: "001" },
    headers: [
      {
        text: "รหัสธุรกรรม",
        align: "start",
        sortable: false,
        value: "transactionId",
      },
      { text: "วันและเวลาที่ทำรายการ", value: "dateAndTime" },
      { text: "รหัสสมาชิก", value: "memberId" },
      { text: "ชื่อ", value: "firstName" },
      { text: "นามสกุล", value: "lastName" },
      { text: "ประเภทบริการ", value: "serviceType" },
      { text: "ยอดเงิน", value: "totalCost" },
      { text: "สถานะธุรกรรม", value: "status" },
    ],
    transactions: [
      {
        transactionId: "001",
        dateAndTime: "01/01/2021 - 12:21",
        memberId: "001",
        firstName: "จอห์น",
        lastName: "สโนว์",
        serviceType: "ความรัก",
        totalCost: 599,
        status: "กำลังดำเนินการ",
      },
    ],
  }),

  watch: {
    // Add Member
    menu1(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },

  methods: {
    // Add Member
    save(date) {
      this.$refs.menu1.save(date);
    },
  },
};
</script>