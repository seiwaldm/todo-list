<template>
  <li v-if="isVisible" class="list-group-item">
    {{ name }}
    <button class="btn btn-danger btn-sm float-right" @click="deleteItem">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: ["name"],
  computed: {
    isVisible() {
      return this.$store.state.filter === ""
        ? true
        : this.name
            .toLowerCase()
            .includes(this.$store.state.filter.toLowerCase());
    },
  },
  methods: {
    deleteItem() {
      this.$store.dispatch("deleteItem", this.name);
    },
  },
};
</script>

<style></style>
