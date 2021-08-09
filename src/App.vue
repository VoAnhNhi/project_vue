<template>
  <v-app id="inspire">
    <v-app-bar app color="yellow lighten-4">
      <div>
        <a href="http://localhost:8080/">
          <v-img :src="require('@/assets/item.png')" max-height="32" max-width="32"></v-img>
        </a>
      </div>
      <v-spacer></v-spacer>
      <v-row justify="center">
        <v-col cols="6">
          <v-card-text>
            <v-text-field placeholder="Tìm kiếm" class="ma-3"></v-text-field>
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
    <footer />
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