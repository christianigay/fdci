<template>
  <q-header bordered class="bg-teal text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$store.dispatch('ui/MODIFY_DRAWER')"/>

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        FDCI
      </q-toolbar-title>
      <q-btn @click="logout" flat round dense icon="mdi-power-standby" />
    </q-toolbar>
  </q-header>
</template>
<script>
import { apiLogout } from '@/apis/auth.js'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      cartItems: 'cart/cartItems'
    })
  },
  methods: {
    logout(){
      apiLogout().then(() => this.$router.push({name: 'auth-login'}))
    }
  }
}
</script>