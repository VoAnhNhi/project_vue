<template>
  <v-app id="inspire">
    <v-app-bar app color="yellow lighten-4">
      <v-row>
        <v-col cols="12" sm="5">
          <a href="http://localhost:8080/" style="text-decoration: none">
            <h2 style="font-family: 'Roboto', sans-serif;">Phụng Store</h2>
          </a>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row >
        <v-col cols="12">
          <v-card-text>
            <v-text-field placeholder="Tìm kiếm sản phẩm" class="ma-3" prepend-icon="mdi-magnify"></v-text-field>
          </v-card-text>
        </v-col>
      </v-row>
      <cart />
      <login />
    </v-app-bar>
    <v-main class="grey lighten-2">
      <Home />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Cart from './components/CartButton.vue'
import Login from './components/LoginButton.vue'
  export default {
    components: {
      Cart,
      Login,
    },
    data () {
      return {
      }
    },
    created () {
    }
  }
</script>