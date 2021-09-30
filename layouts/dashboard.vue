<template>
  <div>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <SideBar />
      <div class="ml-64 w-full min-h-screen bg-gray-50">
        <div class="w-full min-h-screen">
          <Nuxt />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "~/components/layouts/Sidebar.vue";
import Footer from "~/components/layouts/Footer.vue";

export default {
  components: { SideBar, Footer }
};
</script>
