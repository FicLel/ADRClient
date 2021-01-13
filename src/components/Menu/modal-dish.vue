<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="closeDishModal"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="closeDishModal"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  porps: ['active'],
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    closeDishModal() {
      this.$store.commit('changeModal', false);
    },
    openModal(dialog) {
      console.log(dialog)
      this.dialog = dialog;
    },
  },
  wacth: {
    active(newValue) {
      console.log("watch");
      this.dialog = newValue; 
    },
    modal(newValue) {
      console.log("watch");
      console.log(newValue)
      this.dialog = newValue;
    },
  },
  computed: {
    modal() {
      this.openModal(this.$store.getters.getModalDish); 
      return this.$store.getters.getModalDish;
    },
  },
};
</script>
