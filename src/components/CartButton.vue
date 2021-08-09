<template>
  <v-btn class="ma-2" rounded color="primary" router :to=" { name: 'Cart' }">
     <v-icon>mdi-cart</v-icon>
  </v-btn>
</template>

<script>
export default {
    name: 'CartButton'
}
</script>

<style>

</style>