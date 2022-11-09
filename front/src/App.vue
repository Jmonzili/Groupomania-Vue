<script>
import LoginPage from "./pages/LoginPage.vue"
import AppNavbar from "./components/Layout/AppNavbar.vue"

export default {
  name: "App",
  components: {
    AppNavbar,
    LoginPage
  }
}
</script>

<template>
    <AppNavbar />
    <router-view></router-view>
</template>

<style>

</style>
