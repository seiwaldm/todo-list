<template>
  <input
    type="text"
    v-model="filter"
    id="filter"
    placeholder="Search items..."
  />
</template>

<script>
export default {
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.dispatch("updateFilter", value);
      },
    },
  },
};
</script>

<style></style>
