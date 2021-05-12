
<template>
  <v-container>
    <v-carousel class="px-1" v-model="model">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- Games -->
    <v-card class="my-8" height="140">
      <v-row>
        <v-list v-for="item in items" :key="item.src" >
          <v-list-item-avatar class="mx-8" size="100">
            <v-img :src="item.src"> </v-img>
          </v-list-item-avatar>
        </v-list>
      </v-row>
    </v-card>

    <!-- Cards -->
    <v-row>
      <v-col v-for="card in cards" :key="card.title" :cols="3">
        <v-card  class="mx-auto my-2" max-width="400">
          <v-img
            height="250"
            :src="card.src"
          ></v-img>

          <v-card-title>{{ card.title }}}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1">50 coins / hour</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              ดูข้อมูลเพิ่มเติม
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
    cards: [
     {
         title: "PEKO",
         src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
     },
     {
         title: "PEKO",
         src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
     },
     {
         title: "PEKO",
         src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
     },
     {
         title: "PEKO",
         src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
     },
     {
         title: "PEKO",
         src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
     },
     {
         title: "PEKO",
         src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
     },
     
    ],
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
    ],
    loading: false,
    selection: 1,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>