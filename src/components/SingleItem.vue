<template>
  <li class="list-group-item">
    {{ name }}
    <button class="btn btn-danger btn-sm float-right">X</button>
  </li>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style></style>
