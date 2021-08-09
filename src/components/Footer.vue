<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn 
        text 
        color="white" 
        rounded
        class="ma-3"
        v-for="item in items" :key="item"
      > 
        <v-icon> {{ item.icon }} </v-icon>
      </v-btn>
      <v-col cols="12" class="text-center white--text">
        {{ new Date().getFullYear() }} - Vo Anh Nhi
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      items: [
        { icon: 'mdi-home', link: 'http://localhost:8080/'},
        { icon: 'mdi-facebook', link: 'http://facebook.com/'},
        { icon: 'mdi-instagram', link: 'http://instagram.com/'}
      ]
    }
  }
}
</script>

<style>

</style>