<template>
  <main class="main">
    <item-list></item-list>
  </main>
</template>

<script>
import ItemList from "./ItemList.vue";
export default {
  components: { ItemList },
};
</script>

<style scoped>
.main {
  grid-area: 2 / 2;
  display: grid;
  grid-row-gap: 5px;
}
</style>
