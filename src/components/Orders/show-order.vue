<template>
  <div>
    <v-card elevation="6">
      <v-card-title>Orden mesa</v-card-title>
      <v-card-text>
        <v-card v-for="(value, key) in receipt" :key="key">
          <v-card-title>
            <v-icon>mdi-food-fork-drink</v-icon>
            {{value.dish.name}}
         </v-card-title>
        </v-card>
        <v-card color="green" @click="openDishModal()">
          <v-card-title style="margin-top: 1rem; color: #ffffff" >
            <v-icon style="color: #ffffff">mdi-basket-plus</v-icon>
            Agregar
         </v-card-title>
        </v-card>
      </v-card-text>
      <v-card-actions>
        <v-btn
      depressed
      color="error"
    >
      Cerrar
    </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    receipt: [
      {
        dish: {name: "Fideos"}
      },
      {
        dish: {name: "Pasta"}
      }
    ],
  }),
  methods: {
    openDishModal() {
      console.log("modal")
      this.$store.commit('changeModal', true);
    },
  },
};
</script>
