import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [{ name: "Cafe" }, { name: "Bier" }, { name: "Leberkas" }]
  },
  mutations: {
    deleteItem(state, name) {
      state.list = state.list.filter(item => item.name !== name);
    },
    addItem(state, name) {
      state.list.push({ name: name });
    }
  },
  actions: {
    deleteItem(context, name) {
      console.log(context);
      context.commit("deleteItem", name);
    },
    addItem(context, name) {
      context.commit("addItem", name);
    }
  }
})
