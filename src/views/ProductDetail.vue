<template>
  <v-container >
    <v-row justify="center">
      <v-col cols="4" sm="7" md="4" xs="6">
        <v-card class="ma-2" height="425">
          <v-img :src="require(`@/assets/${item.src}`)"></v-img>
        </v-card>
      </v-col>
      <v-col cols="4" sm="7" md="4" xs="6">
        <div class="d-flex flex-column mb-6">
          <v-card class="ma-2" height="425" >
            <v-card-title> {{ item.name }} </v-card-title>
            <h2 style="color: #FF4081" class="text-center"> {{ item.price }} VNĐ </h2>
            <v-card-text>
              <h3 class="d-flex flex-column mb-6">Chi tiết sản phẩm</h3>
              <label class="d-flex flex-column mb-6" v-for="p in productInfo" :key="p"> {{ p }} </label>
              <h3 class="d-flex flex-column mb-6">Tổng tiền: {{ item.price * quantity }} VNĐ</h3>
            </v-card-text>
            <v-row justify="center">
              <v-card-actions>
                <v-btn small @click="increment"><v-icon>mdi-plus</v-icon></v-btn>
                <b  class="ma-2"> {{ quantity }} </b>
                <v-btn small v-if="quantity == 0" @click="decrement" :disabled="true"><v-icon>mdi-minus</v-icon></v-btn>
                <v-btn small v-else @click="decrement" :disabled="false"><v-icon>mdi-minus</v-icon></v-btn>
                <v-btn small @click="addToCart"><v-icon>mdi-cart</v-icon></v-btn>
              </v-card-actions>
            </v-row>   
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    id: Number
  },
  data () {
    return {
      item: null,
      rating: 5,
      productInfo: [
        'Thương hiệu',
        'Xuất sứ',
        'Năm sản xuất',
      ],
      quantity: 0,
      disabled: false,
      totalCost: 0,
      carts: []
    }
  },
  async created () {
    const response = await axios.get('http://localhost:3000/items/' + this.id)
    this.item = response.data

    this.carts = JSON.parse(localStorage['cart'])
    
  },
  methods: {
    async increment () {
      this.quantity += 1;
    },
    async decrement () {
      this.quantity -= 1;
    },
    addToCart () {
      
      const total = this.item.price * this.quantity
      const item = {
        id: this.item.id,
        name: this.item.name,
        src: this.item.src,
        price: this.item.price,
        quantity: this.quantity,
        total: total,
        created_at: new Date()
      }
      this.carts.push(item)
      localStorage['cart'] = JSON.stringify(this.carts)
      
      
      alert('Thêm vào giỏ hàng thành công')
      this.quantity = 0
    }
  },
}
</script>

<style>

</style>