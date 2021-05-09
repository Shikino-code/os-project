<template>
  <v-app>
    <v-container class="px-6">
      <!-- Sorting -->
      <v-row class="px-3">
        <v-btn elevation="0" text :ripple="false" plain >
          
          การจัดเรียง
          <v-icon>mdi-filter</v-icon>

        </v-btn>
      </v-row>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" :cols="4">
          <v-card max-width="600" >
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>
            <v-card-text >
              <v-row align="center" class="mx-0"> </v-row>
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-text >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing gravida eget sed et scelerisque augue sed. Lobortis
                sed a egestas eget pulvinar massa sapien, ut mi. Amet mauris,
                quis metus ac quis elementum ultricies. Sit sagittis mauris
                suspendisse maecenas. Eget eu arcu elementum neque dolor pretium
              </v-card-text>
             
            </v-card-text>

            <v-divider class="mx-3"></v-divider>

            <v-card-actions>
              <v-card flat tile
                ><v-icon>mdi-eye</v-icon>
                {{ views }}
              </v-card>

              <v-spacer></v-spacer>

              <v-btn class="blue-grey darken-2 white--text" elevation="0">
                แก้ไข
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Content",
  data: () => ({
    views: 100,
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
    ],
  }),
  methods: {},
};
</script>