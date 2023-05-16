<template>
    <div class="row justify-center">
      <q-card class="col-xs-12 col-md-4 q-ma-xl q-pa-lg">
        <div class="q-ma-md text-center text-h4">Register</div>

        <FormInput v-model:modelValue="form.name" label="Name"/>
        <FormInput v-model:modelValue="form.email" label="Email Address"/>
        <FormPassword v-model:modelValue="form.password" label="Password"/>
        <FormPassword v-model:modelValue="form.password_confirmation" label="Confirm Password"/>
        <q-card-actions>
          <q-btn @click="$router.push({name: 'auth-login'})" color="grey" label="Login" />
          <q-btn @click="handleRegister" color="teal" label="Register" />
        </q-card-actions>
      </q-card>
    </div>
</template>
<script>
import { apiRegister } from '@/apis/user.js'
import { apiLogin } from '@/apis/auth.js'
import ToastHelper from '@/mixins/ToastHelper.vue';

export default {
    mixins: [ToastHelper],
    data: () => ({
      showPassword: false,
      form: {
        email: '',
        password: '',
        password_confirmation: '',
        name: ''
      },
    }),
    methods: {
      handleRegister() {
        apiRegister(this.form)
        .then(({data}) => {
          if(data) this.handleLogin();
        })
        .catch((error) => {
          let errors = error.response.data.errors
          let keys = Object.keys(errors)
          keys.forEach(item => {
            let [first] = errors[item]
            this.showToast(first, "negative");          
          })
        })
      },
      handleLogin() {
        apiLogin(this.form)
        .then(({data}) => {
          if(data && data.user) this.$router.push({name: 'thank_you'});
        })
      }
    }
}
</script>