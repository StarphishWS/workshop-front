<template>
<div>
    <div class="min-h-screen bg-gray-100">
      <Navbar :primary="false" />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/layouts/Navbar.vue"
import Footer from '~/components/layouts/Footer.vue'


export default {
    name: "default", 
    components: {
        Navbar, 
        Footer
    }
}
</script>