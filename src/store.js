import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "count": 0,
    "imageNumber": "1",
    "requestInProgress": false,
  },
  mutations: {
    INCREMENT_COUNT(state) {
      state.count += 1
    },
    DECREMENT_COUNT(state) {
      state.count -= 1
    },
    UPDATE_IMAGE_NUMBER(state, {imageNumber}) {
      state.imageNumber = imageNumber
    },
    REQUEST_START(state) {
      state.requestInProgress = true;
    },
    REQUEST_SUCCESS(state) {
      state.requestInProgress = false;
    },
  },
  actions: {
    getRandomImage({commit}) {
      commit('REQUEST_START')
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * 4) + 1
        commit('REQUEST_SUCCESS')
        commit('UPDATE_IMAGE_NUMBER', {imageNumber: randomIndex})
      }, 1500)
    },

  },
})
