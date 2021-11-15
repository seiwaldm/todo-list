<template>
  <header class="header bg-success text-white">
    <h1>Item Lister</h1>
    <the-filter></the-filter>
  </header>
</template>

<script>
import TheFilter from "./TheFilter.vue";
export default {
  components: { TheFilter },
};
</script>

<style scoped>
.header {
  grid-column: span 3;
  display: grid;
  grid-template-columns: 40vw 40vw;
  justify-content: center;
  align-items: center;
}
</style>
