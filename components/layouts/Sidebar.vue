<template>
  <div
    class="min-h-screen fixed flex flex-col w-full md:w-64 text-gray-700 bg-primary flex-shrink-0"
  >
    <div
      class="flex-shrink-0 px-8 py-10 flex flex-row items-center justify-between"
    >
      <a
        href="#"
        class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline"
      >
        <Logo :dark="false" />
      </a>
    </div>
    <nav class="block flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
      <!-- <a
        class="block px-4 py-2 mt-2 text-sm font-semibold text-center text-white bg-primary-light rounded-lg focus:outline-none focus:shadow-outline"
        href="#"
        >Blog</a
      > -->
      <nuxt-link
        v-for="link of links"
        :key="link.title"
        :class="{'bg-primary-light': selectedLinks(link.link)}"
        class="block px-4 py-2 mt-2 text-sm font-semibold text-center text-white rounded-lg hover:bg-primary-light focus:bg-primary-light focus:outline-none focus:shadow-outline"
        :to="link.link"
      >
        {{ link.title }}
      </nuxt-link>
    </nav>
  </div>
</template>
<script>
import Logo from "~/components/layouts/Logo.vue";

export default {
  name: "Sidebar",
  components: { Logo },
  data() {
    return {
      links: [
        {
          title: "Mes campagnes",
          link: "/dashboard"
        },
        {
          title: "Ajouter une campagnes",
          link: "/add-campaign"
        },
        {
          title: "Ajouter des contact",
          link: "/add-contact"
        },
        {
          title: "Paramètres",
          link: "/params"
        }
      ]
    };
  }, 
  methods: {
      selectedLinks(link) {
        return this.$route.path === link ? true : false; 
    
      }
  }
};
</script>
