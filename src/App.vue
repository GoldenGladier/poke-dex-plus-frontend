<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ApiStatus from "./components/ApiStatus.vue";
</script>

<template>
  <div>
    <Header />
    <router-view class="custom-router-view" />
    <Footer />
    <ApiStatus />
  </div>
</template>

<style scoped>
.custom-router-view {
  margin: 0;
  margin-top: 0 !important;
  padding: 0;
  width: 100%;
  max-width: 100% !important;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
