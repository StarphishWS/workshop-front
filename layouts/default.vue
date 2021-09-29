<template>
<div class="min-h-screen bg-gray-100">
    <Navbar/> 
    coucou
    <Nuxt /> 
</div>
</template>
<script>
import Navbar from "~/components/layouts/Navbar.vue"

export default {
    name: "default", 
    components: {
        Navbar
    }
}
</script>