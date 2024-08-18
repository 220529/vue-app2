import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    count: 0,
    cats: [],
    message: "Hello, Vuex!",
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    reversedMessage(state) {
      return state.message.split("").reverse().join("");
    },
  },
  mutations: {
    increment(state) {
      // state.count++;
      setTimeout(() => {
        // commit("increment");
        state.count++;
      }, 1000);
    },
    setMessage(state, newMessage) {
      state.message = newMessage;
    },
    async setCats(state, cats) {
      console.log("cats", this);
      // state.cats = cats;

      try {
        const res = await axios.get("/cats");
        console.log("res", res);
        // commit("setCats", res?.data?.content);
        state.cats = res?.data?.content;
      } catch (error) {
        // commit("setError", error.message);
      }
    },
  },
  actions: {
    async fetchCats({ commit }) {
      try {
        const res = await axios.get("/cats");
        console.log("res", res);
        commit("setCats", res?.data?.content);
      } catch (error) {
        // commit("setError", error.message);
      }
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    updateMessage({ commit }, newMessage) {
      commit("setMessage", newMessage);
    },
  },
  modules: {
    // 示例模块
    exampleModule: {
      namespaced: true,
      state: () => ({
        moduleCount: 10,
      }),
      mutations: {
        incrementModuleCount(state) {
          state.moduleCount++;
        },
      },
      actions: {
        incrementModuleCountAsync({ commit }) {
          setTimeout(() => {
            commit("incrementModuleCount");
          }, 500);
        },
      },
      getters: {
        doubleModuleCount(state) {
          return state.moduleCount * 2;
        },
      },
    },
  },
});
