<template>
  <div class="host-container">
    Host container
    <div class="mfe-container">
      <mfe-app></mfe-app>
    </div>
  </div>
</template>

<script setup>
import MfeApp from "remote/Mfe";
</script>

<style scoped>
.mfe-container {
  height: 400px;
  border: 2px solid rgba(255, 255, 255, 0.35);
}
</style>
