<template>
  <TheNavBar/>
  <router-view/>
  <TheFooter/>
</template>

<script setup>
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<style>
body {
  min-height: 100vh;
}

body >div {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
