<template>
    <div>
        <h1 class="text-center py-5 font-extrabold text-3xl">DASHBOARD</h1>
    <div class="p-12 grid grid-cols-3 gap-4">
        <div class="bg-primary-light rounded" v-for="i in 10" :key=i>
            {{ i }}
        </div>
    </div>
    </div>
</template>
<script>
export default {
    layout: 'dashboard'
}
</script>