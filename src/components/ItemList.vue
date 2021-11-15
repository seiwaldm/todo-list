<template>
  <input type="text" v-model="newItem" />
  <button @click="addItem">Add Item</button>
  <ul>
    <single-item
      v-for="item in list"
      :key="item.name"
      :name="item.name"
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
      this.$store.dispatch("addItem", this.newItem);
    },
  },
};
</script>

<style></style>
