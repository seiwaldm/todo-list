<template>
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
      list: [{ name: "Cafe" }, { name: "Bier" }, { name: "Leberkas" }],
    };
  },
};
</script>

<style></style>
