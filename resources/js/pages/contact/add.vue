<template>
    <div class="row justify-center">
      <q-card class="col-xs-12 col-md-4 q-ma-xl q-pa-lg">
        <div class="text-h4">Add contact</div>

        <FormInput v-model:modelValue="form.name" label="Name" :required="true"/>
        <FormInput v-model:modelValue="form.company" label="Company"/>
        <FormInput v-model:modelValue="form.phone" label="Phone"/>
        <FormInput v-model:modelValue="form.email" label="Email"/>
        <q-card-actions>
          <q-btn @click="addContact" color="teal" label="Submit" />
        </q-card-actions>
      </q-card>
    </div>
</template>
<script>
import { contactAdd } from '@/apis/contact.js' 
import ToastHelper from '@/mixins/ToastHelper.vue'
export default {
    mixins: [ToastHelper],
    data: () => ({
        form: {
            name: '',
            company: '',
            phone: '',
            email: '',
        }
    }),
    methods: {
        addContact(){
            if(! this.form.name) return this.showToast('Name required', "negative");
            contactAdd(this.form)
            .then(() => {
                this.showToast("Contact added successfully", "secondary");
                this.$router.push({name: 'contact_list'})
            })
            .catch((error) => {
                let errors = error.response.data.errors
                let keys = Object.keys(errors)
                keys.forEach(item => {
                    let [first] = errors[item]
                    this.showToast(first, "negative");          
                })
            })
        }
    }
}
</script>