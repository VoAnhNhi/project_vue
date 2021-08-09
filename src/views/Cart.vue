<template>
  <v-main>
    <v-container>
      <v-simple-table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody v-if="carts.length">
          <tr  v-for="(item,index) in carts" :key="item.id">
            <td> {{ index + 1}} </td>
            <td><v-img :src="require(`@/assets/${item.src}`)" max-width="70" max-height="60"></v-img> {{ item.name }} </td>
            <td> {{ item.price }} VNĐ </td>
            <td> {{ item.quantity }} </td>
            <td> {{ item.total }} VNĐ</td>
          </tr>
        </tbody>
        <i v-else> Giỏ hàng trống</i>
      </v-simple-table>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      carts: []
    }
  },
  created () {
    this.carts = JSON.parse(localStorage['cart'])
  }
}
</script>

<style>

</style>