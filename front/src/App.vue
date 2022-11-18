<script>
import AppNavbar from "./components/Layout/AppNavbar.vue"

export default {
  name: "App",
  components: {
    AppNavbar
  }
}
</script>

<template>
    <AppNavbar />
    <router-view></router-view>
</template>

<style>
html {
  padding: 0;
}

body {
  height: 100vh;
}
</style>
