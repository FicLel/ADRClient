<template>
  <div>
    <v-container>
      <dish :active="modal"/>
      <tables/>
    </v-container>
  </div>
</template>
<script>
import dish from '@/components/Menu/modal-dish.vue';
import tables from '@/components/Table/show-tables.vue';
export default {
  components: {
    tables,
    dish,
  },
  computed: {
    modal() {
      return this.$store.getters.getModalDish;
    },
  },
}; 
</script>
