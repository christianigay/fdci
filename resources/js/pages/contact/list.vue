<template>
    <div class="text-h4 q-ma-md">Contacts</div>
    <div class="q-pa-md">
        <table-header
        :hide="[]"
        @search="searchTable"
        @addItem="addItem"
        ></table-header>
    </div>
    <div class="q-pa-md">
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Company</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in tableContent"
                :key="item.id"
                >
                    <td data-label="Name">{{item.name}}</td>
                    <td data-label="Company">{{item.company}}</td>
                    <td data-label="Phone">{{item.phone}}</td>
                    <td data-label="Email">{{item.email}}</td>
                    <td>
                        <q-btn  color="primary" label="Edit" class="q-mx-sm"/>
                        <q-btn  color="negative" label="Delete" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="q-pa-lg flex flex-center">
        <q-pagination
        v-model="current"
        :max="totalPage"
        direction-links
        boundary-links
        color="teal"
        />
    </div>
</template>
<script>
import TableHeader from '@/components/forms/TableHeader.vue'
import { contactList } from '@/apis/contact.js'
import ToastHelper from '@/mixins/ToastHelper.vue'
export default {
    mixins: [ToastHelper],
    components: {TableHeader},
    data: () => ({
        current: 1,
        tableContent: [],
        totalPage: 3,
        keyword: ''
    }),
    mounted(){
        this.getContacts()
    },
    methods: {
        getContacts(){
            contactList(this.keyword)
            .then(({data}) => {
                console.log(data, 'data')
                this.tableContent = data.data
            })
        },
        searchTable(value){
            console.log(value, 'search value')
            this.keyword = value
            this.getContacts()
        },
        addItem(){
            this.$router.push({name: 'contact_add'})
        },
        editItem(item){
            this.$router.push({name: 'contact_edit', params: {id: item.id}})
        }
    }
}
</script>
<style scoped>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}

/* general styling */
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}
</style>