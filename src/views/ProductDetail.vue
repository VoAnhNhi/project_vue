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
            <h2 style="color: #FF4081" class="text-center"> {{ formatPrice(item.price) }} VNĐ </h2>
            <v-card-text>
              <h3 class="d-flex flex-column mb-6">Chi tiết sản phẩm</h3>
              <v-row>
                <v-col cols="12" sm="4">
                  <label>Thương hiệu</label>
                </v-col>
                <v-col cols="12" sm="4">
                  <label>{{ item.description.brand }}</label>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <label>Xuất sứ</label>
                </v-col>
                <v-col cols="12" sm="4">
                  <label>{{item.description.made_in}}</label>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <label>Năm sản xuất</label>
                </v-col>
                <v-col cols="12" sm="4">
                  <label>{{item.description.nsx}}</label>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <h3>Tổng tiền:</h3>
                </v-col>
                <v-col cols="12" sm="5">
                  <h3>{{ formatPrice(item.price * quantity) }} VNĐ</h3>
                </v-col>
              </v-row>
            </v-card-text>
            <v-row justify="center">
              <v-card-actions>
                <v-btn small v-if="quantity == 0" @click="decrement" :disabled="true"><v-icon>mdi-minus</v-icon></v-btn>
                <v-btn small v-else @click="decrement" :disabled="false"><v-icon>mdi-minus</v-icon></v-btn>
                <b  class="ma-2"> {{ quantity }} </b>
                <v-btn class="ma-2" small @click="increment"><v-icon>mdi-plus</v-icon></v-btn>
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
    formatPrice(value) {
      let val = (value).toFixed(0)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    increment () {
      this.quantity += 1;
    },
    decrement () {
      this.quantity -= 1;
    },
    addToCart () {
      if(this.quantity === 0) {
        alert('Vui long chon so luong can mua')
      }
      else{
        const item = {
          id: this.item.id,
          name: this.item.name,
          src: this.item.src,
          price: this.item.price,
          quantity: this.quantity,
          total: this.item.price * this.quantity,
          created_at: new Date()
        }
        this.carts.push(item)
        localStorage['cart'] = JSON.stringify(this.carts)
        this.quantity = 0
        alert('Thêm vào giỏ hàng thành công')
        this.$router.push( { name: 'Home'} )
      }
    }
  },
}
</script>

<style>

</style>