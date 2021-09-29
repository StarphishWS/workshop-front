<template>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <SideBar /> 
        <Nuxt /> 
    </div>
</template>
<script>
import SideBar from '~/components/layouts/Sidebar.vue'

export default {
    components: { SideBar }
}
</script>