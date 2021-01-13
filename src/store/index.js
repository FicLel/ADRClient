import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dish: false,
  },
  mutations: {
    changeModal(state, payload) {
	console.log(payload)
	state.dish = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
   getModalDish(state) {
      return state.dish;
   },
  },
})
