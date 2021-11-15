import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [{ name: "Cafe" }, { name: "Bier" }, { name: "Leberkas" }],
    filter: ""
  },
  mutations: {
    deleteItem(state, name) {
      state.list = state.list.filter(item => item.name !== name);
    },
    addItem(state, name) {
      state.list.push({ name: name });
    },
    updateFilter(state, newFilter) {
      state.filter = newFilter;
    }
  },
  actions: {
    deleteItem(context, name) {
      console.log(context);
      context.commit("deleteItem", name);
    },
    addItem(context, name) {
      context.commit("addItem", name);
    },
    updateFilter(context, newFilter) {
      console.log(newFilter);
      context.commit("updateFilter", newFilter);
    }

  }
})
