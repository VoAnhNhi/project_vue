<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-card>
          <v-card-title style="color: red">Đăng ký thông tin tài khoản</v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Tên đăng nhập"
                    prepend-icon="mdi-account"
                    v-model="user.username"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Mật khẩu"
                    prepend-icon="mdi-lock"
                    v-model="user.password"
                    :rules="[rules.required,rules.password]"
                    type="password"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Email"
                    prepend-icon="mdi-email"
                    v-model="user.email"
                    :rules="[rules.required,rules.email]"
                    hint="VD: abc@gmail.com"
                    persistent-hint
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="gender"
                    label="Giới tính"
                    prepend-icon="mdi-human-male-female"
                    v-model="user.gender"
                    :rules="[rules.required]"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Số điện thoại"
                    prepend-icon="mdi-phone"
                    v-model="user.phone"
                    :rules="[rules.required,rules.phone]"
                    hint="VD: 0387046180"
                    persistent-hint
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-row justify="center" style="padding-bottom: 20px">
            <v-card-actions>
              <v-btn rounded color="primary" :disabled="!valid" @click="signup">Đăng ký</v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
        email: '',
        phone: '',
        gender: '',
      },
      valid: true,
      gender: ['Nam','Nữ','Khác'],
      rules: {
        required: v => !!v || 'Phải nhập',
        password: v => v.length >=8 || 'Mật khẩu phải có ít nhất 8 ký tự',
        phone: v => {
          const pattern = /^([0-9]{10})$/
          return pattern.test(v) || 'Số điện thoại là số có 10 chữ số '
        },
        email: v => {
          const pattern = /.+@.+/
          return pattern.test(v) || 'Vui lòng nhập đúng định dạng email'
        }
      }
    }
  },
  methods: {
    async signup () {
      await axios.post('http://localhost:8001/api/auth/signup', this.user)
      alert('Đăng ký thành công. Vui lòng đăng nhập để tiếp tục')
      this.$router.push( { name: 'LoginForm' } )
    }
  }
}
</script>

<style>

</style>