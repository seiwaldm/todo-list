<template>
  <header class="header bg-success text-white">
    <h1>Item Lister</h1>
    <input type="text" id="filter" placeholder="Search items..." />
  </header>
</template>

<script>
export default {};
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
