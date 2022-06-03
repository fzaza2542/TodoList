import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{ id: 1, title: "Learn Vue", completed: false }],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
