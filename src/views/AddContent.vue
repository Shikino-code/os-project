<template>
  <v-container class="px-3 py-6">
    <v-card elevation="0">
      <v-row class="px-12" align="center">
        <v-col cols="5">
          <v-text-field label="ชื่อบทความ"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn flat outlined color="red" dark width="360"
            ><v-icon>mdi-image-plus</v-icon> เพิ่มรูปภาพปก
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-select
            :items="items"
            :menu-props="{ top: false, offsetY: true }"
            label="เลือกประเภท"
          ></v-select>
        </v-col>
      </v-row>

      <v-row >
        <v-col cols="12">
          <div id="app">
            <vue-editor
              id="editor"
              useCustomImageHandler
              @imageAdded="handleImageAdded"
              v-model="htmlForEditor"
            >
            </vue-editor>
          </div>
        </v-col>
      </v-row>
      <v-row class="px-8">
        <v-col align="end" class="px-2" >
          <v-btn flat outlined color="red" dark> ยกเลิก </v-btn>

          <v-btn color="dark-grey" dark> บันทึก </v-btn>
          </v-col>
      </v-row>
      
    </v-card>
  </v-container>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
import axios from "axios";

export default {
  Name: "Addcontent",

  components: { VueEditor },

  data: () => ({
    title: null,
    dialog: false,
    items: ["1", "2", "3"],
    htmlForEditor: "",
  }),

  methods: {
    // Todo : implement add image

    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData();
      formData.append("image", file);

      axios({
        url: "https://fakeapi.yoursite.com/images",
        method: "POST",
        data: formData,
      })
        .then((result) => {
          let url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css">
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
</style>