import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [{ name: "Cafe" }, { name: "Bier" }, { name: "Leberkas" }]
  },
  mutations: {
    deleteItem(name) {
      this.state.list = this.state.list.filter(item => item.name !== name);
    }
  },
  actions: {
  }
})
