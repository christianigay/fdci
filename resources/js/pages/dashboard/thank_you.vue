<template>
    <div class="row justify-center">
        <q-card class="col-xs-12 col-md-4 q-ma-xl q-pa-lg">
            <div class="q-ma-md text-center text-h4">
                <div>
                    Thank you for registering
                </div>
                <div class="q-ma-md">
                    <q-btn @click="$router.push({name: 'contact_list'})" color="teal" label="Continue" />
                </div>
            </div>
        </q-card>
    </div>
</template>
<script>
import { apiDetails } from '@/apis/user.js'
export default {
    data: () => ({
        user: {}
    }),
}
</script>