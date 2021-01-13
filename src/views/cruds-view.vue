<template>
  <v-container>
    <v-row>
      <v-col>
        <restauranst/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import restauranst from '@/components/Restaurant/table-restaurant.vue';
export default{
  components: {
    restauranst,
  },
};
</script>
