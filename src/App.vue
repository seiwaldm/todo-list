<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>

<style>
#app {
  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  grid-template-rows: 10vh;
  grid-row-gap: 20px;
}
</style>
