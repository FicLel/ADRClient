<template>
  <div>
    <v-row>
      <v-col>
        <v-row>
          <v-col  
            v-for="(value, key) in tables" 
            :key="key"
            col="3"
          >
            <v-card 
              class="table" 
              elevation="3"
              width="80%"
              @click="seeOrderOnTable(value)"
            >
              <v-card-title>{{value.identifier}}</v-card-title>
              <v-card-actions>
                <v-icon>mdi-table-chair</v-icon> <h3>5</h3>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="3" sm="6" lg="3">
        <order/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import order from '@/components/Orders/show-order.vue';
export default {
  components: {
    order,
  },
  data: () =>  ({
    tables: [
      {"id": "4asd","identifier": "Mesa 1"}, 
      {"id": "eadsdfa","identifier": "Mesa 2"},
      {"id": "eadsdfa","identifier": "Mesa 2"},
      {"id": "eadsdfa","identifier": "Mesa 2"},
    ],
  }),
  methods: {
    seeOrderOnTable({id, identifier}){
      alert(id);
      console.log(identifier);
    }
  },
};
</script>
<style lang="scss">
.table{
  margin: 3rem;
  min-width: 5em;
}
</style>
