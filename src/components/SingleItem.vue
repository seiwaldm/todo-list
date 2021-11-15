<template>
  <li class="list-group-item">
    {{ name }}
    <button class="btn btn-danger btn-sm float-right" @click="deleteItem">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    deleteItem() {
      this.$store.dispatch("deleteItem", this.name);
    },
  },
};
</script>

<style></style>
