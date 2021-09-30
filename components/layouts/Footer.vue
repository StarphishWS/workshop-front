<template>
    <div class="bg-primary py-12 flex justify-center">
        <Logo :dark="false" /> 
    </div>
</template>
<script>
import Logo from "~/components/layouts/Logo.vue";

export default {
    name: "Footer", 
    components: { Logo }
}
</script>