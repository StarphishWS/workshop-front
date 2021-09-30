<template>
<div class="min-h-screen bg-gray-100">
  <div class="w-full py-6 px-24 grid justify-items-center">
    <Logo :dark="!primary" />
  </div>
    <Nuxt /> 
</div>
</template>
<script>
import Logo from '~/components/layouts/Logo.vue'

export default {
  components: { Logo },
    name: "default-questions", 
    
}
</script>