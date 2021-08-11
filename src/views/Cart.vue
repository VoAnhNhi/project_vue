<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="green--text">Giỏ hàng</v-card-title>
        
        <v-card-text>
          <v-simple-table fixed-header height="250px">
            <thead>
              <tr>
                <th class="pink--text">STT</th>
                <th class="pink--text">Sản phẩm</th>
                <th class="pink--text">Đơn giá</th>
                <th class="pink--text">Số lượng</th>
                <th class="pink--text">Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="carts.length">
              <tr  v-for="(item,i) in carts" :key="item.id">
                <td> {{ i+1}} </td>
                <td><v-img style="float: left" :src="require(`@/assets/${item.src}`)" max-width="70" max-height="60"></v-img><p class="my-5">{{ item.name }}</p>  </td>
                <td> {{ item.price }} VNĐ </td>
                <td> {{ item.quantity }} </td>
                <td> {{ item.total }} VNĐ</td>
                <td>
                  <v-btn text rounded @click="deleteItem(i)">
                    <v-icon color="red darken-4">mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
            <i v-else> Giỏ hàng trống</i>
          </v-simple-table>
        </v-card-text>
        <v-card-actions>
          <v-btn class="my-2 mx-10" small color="red darken-4" dark rounded @click="dialogAll=!dialogAll">Xóa tất cả</v-btn>
          <v-spacer></v-spacer>
          <h4>Tổng tiền: {{ calculatedTotalCost }} VNĐ</h4>
          <v-btn class="my-2 mx-10" small color="green darken-4" dark rounded >Đặt hàng</v-btn>
        </v-card-actions>
      </v-card>
      <v-dialog v-model="dialog" max-width="640px">
        <v-card>
          <v-container>
            <v-card-title>Xóa sản phẩm khỏi giỏ hàng ?</v-card-title>
            <v-card-actions >
              <v-spacer></v-spacer>
              <v-btn text rounded color="blue" @click="deleteItemConfirm">Xóa</v-btn>
              <v-btn text rounded color="red" @click="dialog=false">Hủy</v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogAll" max-width="640px">
        <v-card>
          <v-container>
            <v-card-title>Xóa tất cả sản phẩm khỏi giỏ hàng ?</v-card-title>
            <v-card-actions >
              <v-spacer></v-spacer>
              <v-btn text rounded color="blue" @click="deleteAll">Xóa</v-btn>
              <v-btn text rounded color="red" @click="dialogAll=false">Hủy</v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-dialog>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      carts: [],
      dialog: false,
      dialogAll: false,
      index: -1,
    }
  },
  created () {
    this.carts = JSON.parse(localStorage['cart'])
  },
  computed: {
    calculatedTotalCost () {
      var totalCostAll = 0
      this.carts.forEach((item) => {
        totalCostAll += parseInt(item.total)
      })
      return totalCostAll
    }
  },
  methods: {
    deleteItem (i) {
      this.index = i
      this.dialog = true
    },
    deleteItemConfirm () {
      this.carts.splice(this.index,1)
      localStorage['cart'] = JSON.stringify(this.carts)
      this.dialog = false
    },
    deleteAll () {
      localStorage.removeItem('cart')
      this.$router.go(0)
    }
  }
}
</script>

<style>

</style>