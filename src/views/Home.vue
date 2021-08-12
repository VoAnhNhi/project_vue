<template>
  <v-main>
    <v-container>
      <v-row v-if="items.length">
        <v-col cols="3" v-for="item in items" :key="item.id">
          <v-hover v-slot="{ hover }">
            <v-card height="270" class="mx-auto">
              <v-img :src="require(`@/assets/${item.src}`)" max-height="170">
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out pink lighten-3  v-card--reveal text-h5 black--text" style="height: 100%;">
                    {{ formatPrice(item.price) }} VNĐ
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text>
                <h2 style="color: #FF4081" class="text-center"> {{ item.name }} </h2>
              </v-card-text>
              <v-row justify="center">
                <v-card-actions>
                  <v-btn text rounded color="orange" class="text-center" router :to=" { name: 'ProductDetail', params: { id: item.id } } "> Xem chi tiết </v-btn>
                </v-card-actions>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <i v-else>Loading data.....</i>
    <router-view></router-view>
  </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        items: []
      }
    },
    async created () {
      const response = await axios.get('http://localhost:3000/items')
      this.items = response.data
    },
    methods: {
      formatPrice(value) {
        let val = (value).toFixed(0)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    }
  }
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
</style>
