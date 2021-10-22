<template>
  <the-header></the-header>
  <the-main-section></the-main-section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMainSection from "./components/TheMainSection.vue";
export default {
  components: { TheHeader, TheMainSection },
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
