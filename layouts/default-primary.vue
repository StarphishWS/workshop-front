<template>
  <div>
    <div class="min-h-screen bg-gray-100">
      <Navbar :primary="true" />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/layouts/Navbar.vue";
import Footer from "~/components/layouts/Footer.vue";

export default {
  name: "default-primary",
  components: {
    Navbar,
    Footer
  }
};
</script>
