<template>
  <input type="text" v-model="newItem" />
  <button @click="addItem">Add Item</button>
  <ul>
    <single-item
      v-for="item in list"
      :key="item.name"
      :name="item.name"
      @deleteItem="deleteItem"
    ></single-item>
  </ul>
</template>

<script>
import SingleItem from "./SingleItem.vue";
export default {
  components: { SingleItem },
  data: function() {
    return {
      newItem: "",
    };
  },
  computed: {
    list: function() {
      return this.$store.state.list;
    },
  },
  methods: {
    addItem() {
      this.list.push({ name: this.newItem });
    },
    deleteItem(name) {
      this.list = this.list.filter((item) => item.name !== name);
    },
  },
};
</script>

<style></style>
