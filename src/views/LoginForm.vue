<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-card>
          <v-img :src="require('@/assets/item.png')" max-height="200"></v-img>
          <v-card-text>
            <v-text-field 
              label="Tên đăng nhập"
              v-model="user.username"
              prepend-icon="mdi-account"
            >
            </v-text-field>
            <v-text-field 
              label="Mật khẩu"
              v-model="user.password"
              prepend-icon="mdi-lock"
              type="password"
            >
            </v-text-field>
            <div class="text-center">
              <span style="color: red;" v-if="loginError"> {{ loginError }} </span>
            </div>
          </v-card-text>
          <v-row justify="center">
            <v-card-actions>
              <v-btn rounded color="primary" @click="login" >Đăng nhập</v-btn>
            </v-card-actions>
          </v-row>
          <v-row justify="center">
            <v-card-actions>
              <b>Chưa có tài khoản ?</b><v-btn text rounded color="primary" router :to=" { name: 'SignupForm' } ">Đăng ký</v-btn>
            </v-card-actions>  
           </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
      loginError: '',
      disabled: true
    }
  },
  methods: {
    async login () {
      if( this.user.username === '' || this.user.password === ''){
        this.loginError = 'Vui lòng điền đầy đủ thông tin đăng nhập'
      }
      else{
        const response = await axios.post('http://localhost:8001/api/auth/login', this.user).catch(err => { console.log(err)})
      if(!response){
        this.loginError = 'Tên đăng nhập hoặc mật khẩu không đúng'
      }
      localStorage.setItem('token',response.data.token)
      alert('Đăng nhập thành công')
      this.$router.push( { name: 'Home' } )
      }
    }
  }
}
</script>

<style>

</style>