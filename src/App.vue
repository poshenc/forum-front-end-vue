<template>
  <div id="restaurant-forum">
    <Navbar />

    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
main {
  margin-top: 65px !important;
}
</style>