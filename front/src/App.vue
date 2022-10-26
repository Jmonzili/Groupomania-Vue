<script>
import Login from "./components/Login.vue"
import Navbar from "./components/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Login
  }
}
</script>

<template>
    <Navbar />
    <router-view></router-view>
</template>

<style>

</style>
