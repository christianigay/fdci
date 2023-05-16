<template>
  <q-dialog ref="dialog" persistent @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section class="text-h6">{{title}}</q-card-section>
      <q-card-section>
        {{ message }}
      </q-card-section>

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn color="grey" label="Cancel" @click="onCancelClick" />
        <q-btn color="primary" label="OK" @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    }
    
  },

  emits: [
    // REQUIRED
    'ok', 'hide'
  ],
  watch:{
    confirmDialog: {
      handler(val){
        if(val){
          this.show()
        }
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
		...mapGetters({
      confirmDialog: 'ui/confirmDialog'
		})
	},
  methods: {
    show () {
      this.$refs.dialog.show()
    },

    hide () {
      this.$refs.dialog.hide()
      this.$store.dispatch('ui/MODIFY_CONFIRM_DIALOG', false)
    },

    onDialogHide () {
      this.$emit('hide')
    },

    onOKClick () {
      this.$emit('ok')
      this.hide()
    },

    onCancelClick () {
      this.hide()
    }
  }
}
</script>